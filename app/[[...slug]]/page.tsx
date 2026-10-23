import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  loadContent,
  loadGlobals,
  pages,
  articles,
  locales,
  resolveRoute,
} from "@/lib/content";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageContent, Article } from "@/components/page-content";
export const dynamicParams = false;
export function generateStaticParams() {
  const routes = [
    [],
    ...pages.filter((p) => p !== "home").map((p) => [p]),
    ...articles.map((p) => ["news", p]),
  ];
  return routes.flatMap((slug) => [
    { slug },
    ...locales.map((locale) => ({ slug: [locale, ...slug] })),
  ]);
}
type Props = { params: Promise<{ slug?: string[] }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = resolveRoute((await params).slug);
  try {
    const content = loadContent(name);
    const data = (content.getPageDocument || content.getNewsDocument).data;
    return {
      title: data.title,
      description: data.seo?.description || data.description,
      openGraph: {
        title: data.seo?.title || data.title,
        description: data.seo?.description || data.description,
        images:
          data.seo?.image || data.image ? [data.seo?.image || data.image] : [],
      },
    };
  } catch {
    return { title: "Page not found" };
  }
}
export default async function Page({ params }: Props) {
  const route = resolveRoute((await params).slug);
  let content;
  try {
    content = loadContent(route.name);
  } catch {
    notFound();
  }
  const globals = loadGlobals();
  const settings = globals.settings[route.locale.slice(3)];
  const data = (content.getPageDocument || content.getNewsDocument).data;
  return (
    <>
      <Navigation
        prefix={route.prefix}
        locale={route.locale}
        parts={route.parts}
        signIn={settings.signInLink}
        signUp={
          route.name === "personal"
            ? settings.signUpLinkPersonal || settings.signUpLink
            : settings.signUpLink
        }
        items={globals.navigation}
      />
      <main id="main">
        {content.getNewsDocument ? (
          <Article data={data} prefix={route.prefix} />
        ) : (
          <PageContent
            data={data}
            settings={settings}
            prefix={route.prefix}
            personal={route.name === "personal"}
          />
        )}
      </main>
      <Footer data={globals.footer} {...route} />
    </>
  );
}
