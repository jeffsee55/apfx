import Head from "next/head";
import { useTina } from "tinacms/dist/edit-state";
import { Chain, Zeus } from "../zeus";
import { HeroWithSlantImage } from "../components/blocks/hero";
import {
  TwoWideGrid,
  ThreeWideGrid,
  FourWideGrid,
  ScreenshotFeatureRight,
  ScreenshotFeatureLeft,
} from "../components/blocks/feature";
import {
  FullScreenHeaderWithBackground,
  FullScreenLogo,
} from "../components/blocks/header";
import { StatsWithImage } from "../components/blocks/stats";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Pricing } from "../components/blocks/pricing";
import { Slideshow } from "../components/blocks/slideshow";
import { News } from "./blocks/news";

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;
type HomeProps = AsyncReturnType<typeof getStaticProps>["props"];

export default function Home(p: HomeProps) {
  const props = useTina(p);
  const seo = props.data.getPageDocument.data.seo;

  return (
    <>
      <Head>
        <title>{props.data.getPageDocument.data.title}</title>
        {seo && (
          <>
            <meta property="og:title" content={seo.title} />
            <meta
              name="description"
              property="og:description"
              content={seo.description}
            />
            {/* @ts-ignore */}
            <meta property="og:image" content={seo.image} />
          </>
        )}
      </Head>

      <main>
        {props.data.getNavigationDocument.data && (
          <Nav {...props.data.getNavigationDocument.data} />
        )}
        {props.data.getPageDocument.data.blocks?.map((block) => {
          switch (block.__typename) {
            case "PageBlocksFullScreenLogo":
              return <FullScreenLogo {...block} />;
            case "PageBlocksHero":
              if (block.style === "slanted") {
                return <HeroWithSlantImage {...block} />;
              }
              return <HeroWithSlantImage {...block} />;
            case "PageBlocksNews":
              return <News {...block} />;
            case "PageBlocksFeature":
              if (block.featureStyle === "2-wide-grid") {
                return <TwoWideGrid {...block} />;
              } else if (block.featureStyle === "3-column") {
                return <ThreeWideGrid {...block} />;
              } else {
                return <FourWideGrid {...block} />;
              }
            case "PageBlocksScreenShotFeature":
              if (block.alignment === "left") {
                return <ScreenshotFeatureLeft {...block} />;
              }
              return <ScreenshotFeatureRight {...block} />;
            case "PageBlocksStatsWithImage":
              return <StatsWithImage {...block} />;
            case "PageBlocksFullScreenHeader":
              return <FullScreenHeaderWithBackground {...block} />;
            case "PageBlocksSlideshow":
              return <Slideshow {...block} />;
            case "PageBlocksComparisonTable":
              return <Pricing {...block} />;

            default:
              // @ts-ignore
              throw new Error(`Unknown block ${block.__typename}`);
          }
        })}
        {props.data.getFooterDocument.data && (
          <Footer {...props.data.getFooterDocument.data} />
        )}
      </main>
    </>
  );
}

export const getStaticProps = async ({
  relativePath,
}: {
  relativePath: string;
}) => {
  const chain = Chain("http://localhost:4001/graphql", {});
  const chainWithQueryString = {
    query: async <
      T extends Parameters<typeof chain.query>[0],
      B extends Parameters<typeof chain.query>[1]
    >(
      queryObject: T,
      variables?: B
    ) => {
      return {
        query: Zeus.query(queryObject),
        data: await chain.query(queryObject, variables),
      };
    },
  };
  // try {
  const listCardsAndDraw = await chainWithQueryString.query({
    getLocaleInfoDocument: [
      {
        relativePath: "main.md",
      },
      {
        dataJSON: true,
      },
    ],
    getPageList: [
      {},
      {
        edges: {
          node: {
            id: true,
          },
        },
      },
    ],
    getNavigationDocument: [
      { relativePath: "main.md" },
      {
        data: {
          items: {
            page: {
              "...on PageDocument": {
                data: {
                  title: true,
                  link: true,
                },
              },
            },
          },
        },
      },
    ],
    getFooterDocument: [
      { relativePath: "main.md" },
      {
        data: {
          offices: {
            address: true,
            location: true,
            phone: true,
          },
          disclaimers: {
            body: true,
          },
        },
      },
    ],
    getThemeDocument: [
      { relativePath: "main.json" },
      {
        dataJSON: true,
      },
    ],
    getPageDocument: [
      { relativePath },
      {
        id: true,
        data: {
          title: true,
          seo: {
            // @ts-ignore not sure why it's not getting updated
            title: true,
            description: true,
            image: true,
          },
          blocks: {
            __typename: true,
            "...on PageBlocksComparisonTable": {
              title: true,
              subTitle: true,
              description: true,
              action: {
                callToAction: true,
                link: true,
                linkText: true,
                linkOverride: true,
                secondaryLink: true,
                secondaryText: true,
                secondaryLinkOverride: true,
              },
              items: {
                title: true,
                subTitle: true,
                description: true,
                bulletPoints: true,
              },
            },
            "...on PageBlocksHero": {
              title: true,
              description: true,
              image: true,
              style: true,
              action: {
                link: true,
                linkText: true,
                linkOverride: true,
                secondaryLink: true,
                secondaryText: true,
                secondaryLinkOverride: true,
              },
            },
            "...on PageBlocksFeature": {
              title: true,
              description: true,
              subTitle: true,
              featureStyle: true,
              features: {
                icon: true,
                name: true,
                description: true,
              },
              image: true,
              overlayColor: true,
              overlayOpacity: true,
              textColor: true,
            },
            "...on PageBlocksScreenShotFeature": {
              title: true,
              description: true,
              subTitle: true,
              image: true,
              icon: true,
              alignment: true,
              testimonial: {
                quote: true,
                author: {
                  avatar: true,
                  name: true,
                },
              },
              action: {
                callToAction: true,
                link: true,
                linkText: true,
                secondaryLink: true,
                secondaryText: true,
              },
            },
            "...on PageBlocksNews": {
              title: true,
              subTitle: true,
              newsItems: {
                article: {
                  "...on NewsDocument": {
                    data: {
                      title: true,
                      image: true,
                      subTitle: true,
                    },
                    sys: {
                      filename: true,
                    },
                  },
                },
              },
            },
            "...on PageBlocksFullScreenLogo": {
              slogan: true,
              link: true,
              image: true,
              overlayColor: true,
              overlayOpacity: true,
            },
            "...on PageBlocksFullScreenHeader": {
              title: true,
              description: true,
              image: true,
              overlayColor: true,
              overlayOpacity: true,
              action: {
                link: true,
                linkText: true,
                secondaryLink: true,
                secondaryText: true,
              },
              textColor: true,
            },
            "...on PageBlocksStatsWithImage": {
              title: true,
              description: true,
              image: true,
              subTitle: true,
              stats: {
                title: true,
                description: true,
              },
            },
            "...on PageBlocksSlideshow": {
              items: {
                title: true,
                description: true,
                image: true,
                action: {
                  link: true,
                  linkText: true,
                  secondaryLink: true,
                  secondaryText: true,
                },
                overlayColor: true,
                overlayOpacity: true,
                textColor: true,
              },
            },
          },
        },
      },
    ],
  });
  return { props: listCardsAndDraw };
  // } catch (e) {
  //   return {
  //     props: JSON.parse(JSON.stringify(e)).response,
  //   };
  // }
};
