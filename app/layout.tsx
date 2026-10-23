import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics";
export const metadata: Metadata = {
  title: {
    default: "APFX — Your global payments partner",
    template: "%s",
  },
  icons: { icon: { url: "/favicon.png", type: "image/png" } },
  description:
    "Global payments and currency solutions for corporate and private clients.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
