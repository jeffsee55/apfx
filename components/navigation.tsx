"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Globe2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

export function Navigation({
  prefix,
  signIn,
  signUp,
  locale,
  parts,
  items: navigation,
}: {
  prefix: string;
  signIn: string;
  signUp: string;
  locale: string;
  parts: string[];
  items: { title: string; link: string }[];
}) {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [pathname, locale]);
  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const items = navigation.map((n) => [n.title, n.link]);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="nav-wrap">
        <Link
          href={prefix || "/"}
          aria-label="APFX home"
          scroll={false}
          onNavigate={scrollToTop}
        >
          <img src="/assets/logo.svg" className="nav-logo" alt="APFX" />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {items.map(([name, url]) => (
            <Link
              key={url}
              href={prefix + url}
              scroll={false}
              onNavigate={scrollToTop}
              aria-current={
                pathname.replace(/\/$/, "") === prefix + url
                  ? "page"
                  : undefined
              }
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="desktop-actions">
          <CountryPicker locale={locale} parts={parts} compact />
          <a href={signIn}>Sign in</a>
          <Button asChild>
            <a href={signUp}>Sign up</a>
          </Button>
        </div>
        <div className="mobile-menu">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open main menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <img
                src="/assets/logo.svg"
                alt="APFX"
                width="110"
                className="mb-12 mt-2"
              />
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-6"
              >
                {items.map(([name, url]) => (
                  <SheetClose asChild key={url}>
                    <Link
                      href={prefix + url}
                      className="text-lg"
                      scroll={false}
                      onNavigate={scrollToTop}
                    >
                      {name}
                    </Link>
                  </SheetClose>
                ))}
                <CountryPicker locale={locale} parts={parts} compact />
                <a href={signIn} className="border-t border-white/10 pt-6">
                  Sign in
                </a>
                <Button asChild>
                  <a href={signUp}>Sign up</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
export function CountryPicker({
  locale,
  parts,
  compact = false,
}: {
  locale: string;
  parts: string[];
  compact?: boolean;
}) {
  const router = useRouter();
  return (
    <label
      className={compact ? "country-label country-compact" : "country-label"}
    >
      {!compact && <Globe2 size={16} />}
      <span className="sr-only">Country</span>
      <select
        aria-label="Country"
        value={locale}
        onChange={(e) => {
          const selected = e.target.value;
          document.cookie = `NEXT_LOCALE=${selected}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
          router.push(
            "/" +
              selected +
              (parts.length ? "/" + parts.join("/") : "") +
              window.location.search +
              window.location.hash,
            { scroll: false },
          );
        }}
      >
        <option value="en-au">{compact ? "AU" : "Australia"}</option>
        <option value="en-gb">{compact ? "UK" : "United Kingdom"}</option>
        <option value="en-us">{compact ? "US" : "United States"}</option>
      </select>
      {compact && (
        <ChevronDown className="country-chevron" aria-hidden="true" />
      )}
    </label>
  );
}
