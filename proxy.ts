import { NextRequest, NextResponse } from "next/server";
import { preferredLocale } from "./lib/locale";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  const languages = (request.headers.get("accept-language") || "")
    .split(",")
    .map((entry) => {
      const [language, ...parameters] = entry.trim().split(";");
      const weight = parameters.find((value) => value.trim().startsWith("q="));
      return { language, quality: weight ? Number(weight.trim().slice(2)) : 1 };
    })
    .filter(
      (entry) =>
        Number.isFinite(entry.quality) &&
        entry.quality > 0 &&
        entry.quality <= 1,
    )
    .sort((a, b) => b.quality - a.quality)
    .map((entry) => entry.language);
  const locale = preferredLocale(
    languages,
    request.headers.get("cookie") || "",
  );
  const response =
    locale === "en-au"
      ? NextResponse.next()
      : NextResponse.redirect(
          new URL(`/${locale}${request.nextUrl.search}`, request.url),
          307,
        );
  response.headers.set("Vary", "Accept-Language, Cookie");
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
export const config = { matcher: "/" };
