import { PageLink as Link } from "./page-link";
import Markdown from "react-markdown";
import {
  ArrowUpRight,
  Check,
  UserRound,
  Cog,
  Coins,
  Globe2,
  Heart,
  Scale,
  Zap,
  FileChartColumn,
  Inbox,
  ArrowRight,
  Filter,
  ChartColumn,
  Wifi,
} from "lucide-react";
import { Button } from "./ui/button";
import { Slideshow } from "./slideshow";
import type { Content } from "@/lib/content";
import assets from "@/lib/assets.json";
const featureIcons: Record<string, typeof UserRound> = {
  UserCircleIcon: UserRound,
  CogIcon: Cog,
  CurrencyDollarIcon: Coins,
  GlobeAltIcon: Globe2,
  HeartIcon: Heart,
  ScaleIcon: Scale,
  LightningBoltIcon: Zap,
  DocumentReportIcon: FileChartColumn,
  InboxIcon: Inbox,
  ArrowRightIcon: ArrowRight,
  FilterIcon: Filter,
  ChartBarIcon: ChartColumn,
  WifiIcon: Wifi,
};
const assetMap: Record<string, string> = assets;
const image = (url: string) =>
  url?.includes("iStock-487808414")
    ? "/assets/9d6c9147cb04f3eb.jpg"
    : assetMap[url] || url;
export function Actions({
  action,
  settings,
  personal = false,
}: {
  action: Content;
  settings: Content;
  personal?: boolean;
}) {
  if (!action) return null;
  function href(secondary = false) {
    const override =
      action[secondary ? "secondaryLinkOverride" : "linkOverride"];
    const value = action[secondary ? "secondaryLink" : "link"];
    return (
      override ||
      settings[
        personal && value === "signUpLink" ? "signUpLinkPersonal" : value
      ] ||
      (value?.startsWith("/")
        ? value
        : "https://share.hsforms.com/1Zi7kaqn1THCrZt6hdDaGng5kdde")
    );
  }
  return (
    <div className="actions">
      {action.linkText && (
        <Button asChild>
          <a href={href()}>
            {action.linkText}
            <ArrowUpRight />
          </a>
        </Button>
      )}
      {action.secondaryText && (
        <Button asChild variant="secondary">
          <a href={href(true)}>{action.secondaryText}</a>
        </Button>
      )}
    </div>
  );
}
export function PageContent({
  data,
  settings,
  prefix,
  personal = false,
}: {
  data: Content;
  settings: Content;
  prefix: string;
  personal?: boolean;
}) {
  return (
    <>
      {data.blocks.map((b: Content, i: number) => {
        const key = b.__typename + i;
        if (b.__typename === "PageBlocksFullScreenLogo")
          return (
            <section
              key={key}
              className="brand-hero"
              style={{
                backgroundImage: `linear-gradient(rgba(8,13,23,.48),rgba(4,7,13,.65)),url("${image(b.image)}")`,
              }}
            >
              <div className="hero-brand">
                <img src="/assets/monogram.svg" alt="APFX" />
                <h1>{b.slogan}</h1>
              </div>
            </section>
          );
        if (b.__typename === "PageBlocksHero")
          return (
            <section
              key={key}
              className={
                "intro " +
                (b.style === "slanted" ? "intro-slanted " : "") +
                (i === 0 ? "first-section" : "")
              }
            >
              <div className="container intro-grid">
                <div>
                  {i === 0 ? (
                    <h1 className="page-title">{b.title}</h1>
                  ) : (
                    <h2>{b.title}</h2>
                  )}
                  <div className="prose-copy">
                    <Markdown>{b.description}</Markdown>
                  </div>
                  <Actions
                    action={b.action}
                    settings={settings}
                    personal={personal}
                  />
                </div>
                <div className="intro-image">
                  <img src={image(b.image)} alt="" loading="lazy" />
                </div>
              </div>
            </section>
          );
        if (b.__typename === "PageBlocksFeature")
          return (
            <section key={key} className="features section">
              <div className="container">
                {b.subTitle && <p className="eyebrow">{b.subTitle}</p>}
                <h2>{b.title}</h2>
                {b.description && (
                  <div className="prose-copy feature-lead">
                    <Markdown>{b.description}</Markdown>
                  </div>
                )}
                <div
                  className={
                    "feature-grid " +
                    (b.featureStyle === "2-wide-grid" ? "feature-grid-two" : "")
                  }
                >
                  {b.features?.map((f: Content, j: number) => {
                    const Icon = featureIcons[f.icon] || Globe2;
                    return (
                      <div key={j} className="feature">
                        <div className="feature-icon">
                          <Icon size={23} />
                        </div>
                        <h3>{f.name}</h3>
                        <div className="prose-copy">
                          <Markdown>{f.description}</Markdown>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        if (b.__typename === "PageBlocksSlideshow")
          return (
            <Slideshow
              key={key}
              items={b.items.map((s: Content) => ({
                ...s,
                image: image(s.image),
              }))}
            />
          );
        if (b.__typename === "PageBlocksFullScreenHeader") {
          const legal = data.title === "Privacy Policy";
          return (
            <section
              key={key}
              className={
                legal ? "legal section first-section" : "image-section section"
              }
              style={
                !legal && b.image
                  ? {
                      backgroundImage: `linear-gradient(90deg,rgba(4,7,13,.88),rgba(4,7,13,.55)),url("${image(b.image)}")`,
                    }
                  : undefined
              }
            >
              <div className="container">
                <div
                  className={legal ? "legal-content" : "image-section-content"}
                >
                  {legal ? <h1>{b.title}</h1> : <h2>{b.title}</h2>}
                  <div className="prose-copy">
                    <Markdown>{b.description}</Markdown>
                  </div>
                  <Actions action={b.action} settings={settings} />
                </div>
              </div>
            </section>
          );
        }
        if (b.__typename === "PageBlocksComparisonTable")
          return (
            <section key={key} className="comparison section">
              <div className="container">
                <div className="section-heading">
                  <p className="eyebrow">{b.subTitle}</p>
                  <h2>{b.title}</h2>
                </div>
                <div className="comparison-grid">
                  {b.items.map((item: Content, j: number) => (
                    <div key={j}>
                      <p className="eyebrow">{item.subTitle}</p>
                      <h3>{item.title}</h3>
                      <div className="prose-copy">
                        <Markdown>{item.description}</Markdown>
                      </div>
                      {item.bulletPoints && (
                        <ul className="benefits">
                          {item.bulletPoints.map((t: string) => (
                            <li key={t}>
                              <Check size={18} />
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className="contact-banner">
                  <h2>{b.action.callToAction}</h2>
                  <Actions action={b.action} settings={settings} />
                </div>
              </div>
            </section>
          );
        if (b.__typename === "PageBlocksNews")
          return (
            <section key={key} className="section first-section news">
              <div className="container">
                <p className="eyebrow">{b.subTitle}</p>
                <h1>{b.title}</h1>
                <div className="news-grid">
                  {b.newsItems.map((n: Content, j: number) => (
                    <Link
                      key={j}
                      href={prefix + "/news/" + n.article.sys.filename}
                      className="news-card"
                    >
                      <div className="news-image">
                        <img
                          src={image(n.article.data.image)}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="eyebrow">{n.article.data.subTitle}</p>
                        <h2>{n.article.data.title}</h2>
                        <span className="read-more">
                          Read article <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        return null;
      })}
    </>
  );
}
export function Article({ data, prefix }: { data: Content; prefix: string }) {
  return (
    <article className="article section first-section">
      <div className="container">
        <Link href={prefix + "/news"} className="back-link">
          ← News & Insights
        </Link>
        <p className="eyebrow">{data.subTitle}</p>
        <h1>{data.title}</h1>
        <img className="article-image" src={image(data.image)} alt="" />
        <div className="prose-copy article-body">
          <Markdown>{data.body}</Markdown>
        </div>
      </div>
    </article>
  );
}
