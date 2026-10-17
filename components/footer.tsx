import { PageLink as Link } from "./page-link";
import Markdown from "react-markdown";
import { CountryPicker } from "./navigation";
import type { Content } from "@/lib/content";
export function Footer({
  data,
  locale,
  parts,
  prefix,
}: {
  data: Content;
  locale: string;
  parts: string[];
  prefix: string;
}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-heading">
          <img src="/assets/logo.svg" alt="APFX" width="120" />
          <span>Your global payments partner</span>
        </div>
        <h2>Our offices</h2>
        <div className="office-grid">
          {data.offices.map((o: Content) => (
            <div key={o.location}>
              <h3>{o.location}</h3>
              <address>{o.address}</address>
              <a href={"tel:" + o.phone.replace(/\s/g, "")}>{o.phone}</a>
            </div>
          ))}
        </div>
        <div className="disclaimers">
          {data.disclaimers.map((d: Content, i: number) => (
            <Markdown
              key={i}
              components={{
                img: ({ alt, src }) => (
                  <span className="association-label" title={String(src)}>
                    {alt}
                  </span>
                ),
              }}
            >
              {d.body}
            </Markdown>
          ))}
        </div>
        <div className="footer-country">
          <h3>Country</h3>
          <CountryPicker locale={locale} parts={parts} />
        </div>
        <div className="footer-bottom">
          <Link href={prefix + "/privacy-policy"}>Privacy Policy</Link>
          <span>© 2020 APFX, Inc. All rights reserved.</span>
          <span className="footer-social">
            Follow us on{" "}
            <a href="https://www.linkedin.com/company/19218470">LinkedIn</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
