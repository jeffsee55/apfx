"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type PageLinkProps = Omit<ComponentProps<typeof Link>, "scroll" | "onNavigate">;

// Page links start at the top; country switching deliberately preserves scroll.
export function PageLink(props: PageLinkProps) {
  return (
    <Link
      {...props}
      scroll={false}
      onNavigate={() =>
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }
    />
  );
}
