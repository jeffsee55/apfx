export const supportedLocales = ["en-au", "en-us", "en-gb"] as const;
export type Locale = (typeof supportedLocales)[number];

export function preferredLocale(
  languages: readonly string[],
  cookies = "",
): Locale {
  const saved = cookies
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("NEXT_LOCALE="))
    ?.slice("NEXT_LOCALE=".length)
    .toLowerCase();
  if (supportedLocales.includes(saved as Locale)) return saved as Locale;
  for (const language of languages) {
    const candidate = language.toLowerCase();
    if (supportedLocales.includes(candidate as Locale))
      return candidate as Locale;
  }
  return "en-au";
}
