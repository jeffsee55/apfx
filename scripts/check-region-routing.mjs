import assert from "node:assert/strict";

const origin = process.argv[2] || "http://localhost:3000";
const cases = [
  ["US homepage", "/", "en-US", "", "/en-us", 1],
  ["UK homepage", "/", "en-GB", "", "/en-gb", 1],
  ["AU homepage", "/", "en-AU", "", "/", 0],
  ["unsupported language", "/", "fr-FR", "", "/", 0],
  ["saved AU", "/", "en-US", "NEXT_LOCALE=en-au", "/", 0],
  ["saved UK", "/", "en-US", "NEXT_LOCALE=en-gb", "/en-gb", 1],
  ["weighted languages", "/", "en-US;q=0.4,en-GB;q=0.9", "", "/en-gb", 1],
  ["explicit region", "/en-au", "en-US", "NEXT_LOCALE=en-gb", "/en-au", 0],
  ["slash normalization", "/en-us/", "en-US", "", "/en-us", 1],
  [
    "preview query",
    "/?__v0_healed=1&utm_source=test",
    "en-US",
    "",
    "/en-us?__v0_healed=1&utm_source=test",
    1,
  ],
];

for (const [
  name,
  path,
  language,
  cookie,
  expected,
  expectedRedirects,
] of cases) {
  let url = new URL(path, origin);
  const visited = new Set();
  let redirects = 0;
  while (true) {
    assert(!visited.has(url.href), `${name}: redirect loop at ${url.href}`);
    visited.add(url.href);
    const response = await fetch(url, {
      redirect: "manual",
      headers: { "Accept-Language": language, Cookie: cookie },
    });
    if (response.status >= 300 && response.status < 400) {
      assert(++redirects <= 3, `${name}: too many redirects`);
      const next = new URL(response.headers.get("location"), url);
      assert.equal(
        next.origin,
        new URL(origin).origin,
        `${name}: unexpected redirect host`,
      );
      url = next;
      continue;
    }
    assert.equal(response.status, 200, name);
    assert.equal(url.pathname + url.search, expected, name);
    assert.equal(redirects, expectedRedirects, name);
    break;
  }
}
console.log(`${cases.length} redirect-chain checks passed; no loops.`);
