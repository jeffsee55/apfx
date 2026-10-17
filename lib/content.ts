import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";
export type Content = Record<string, any>;
const root = path.join(process.cwd(), "content");
function read(file: string): Content {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const match = source.match(
    /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/,
  );
  if (!match) throw new Error("Missing frontmatter: " + file);
  return { ...parse(match[1]), body: match[2] };
}
export const pages = fs
  .readdirSync(path.join(root, "pages"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(".md", "").replace("private", "personal"));
export const articles = fs
  .readdirSync(path.join(root, "news"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));
export const locales = ["en-au", "en-us", "en-gb"];
export function resolveRoute(slug: string[] = []) {
  const localized = locales.includes(slug[0]);
  const locale = localized ? slug[0] : "en-au";
  const parts = localized ? slug.slice(1) : slug;
  return {
    locale,
    parts,
    name: parts.length ? parts.join("__") : "home",
    prefix: localized ? "/" + locale : "",
  };
}
export function loadContent(name: string): Content {
  const article = name.startsWith("news__");
  const data = read(
    article
      ? "news/" + name.slice(6) + ".md"
      : "pages/" + (name === "personal" ? "private" : name) + ".md",
  );
  if (data.blocks)
    data.blocks = data.blocks.map((b: Content) => ({
      ...b,
      __typename:
        "PageBlocks" + b._template[0].toUpperCase() + b._template.slice(1),
      newsItems: b.newsItems?.map((n: Content) => {
        const filename = path.basename(n.article, ".md");
        return {
          article: {
            data: read("news/" + filename + ".md"),
            sys: { filename },
          },
        };
      }),
    }));
  return article
    ? { getNewsDocument: { data } }
    : { getPageDocument: { data } };
}
export function loadGlobals() {
  const navigation = read("navigation/main.md").items.map((n: Content) => {
    const p = read(n.page.replace(/^content\//, ""));
    return { title: p.title, link: p.link };
  });
  return {
    navigation,
    footer: read("footer/main.md"),
    settings: read("localeInfo/main.md"),
  };
}
