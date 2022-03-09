import Head from "next/head";
import { Chain, Zeus } from "../zeus";
import {
  heroTemplate,
  blockHeroQuery,
  HeroWithSlantImage,
} from "../components/blocks/hero";
import {
  TwoWideGrid,
  ThreeWideGrid,
  FourWideGrid,
  ScreenshotFeatureRight,
  ScreenshotFeatureLeft,
  blockFeatureQuery,
  blockScreenshotFeatureQuery,
  featureTemplate,
  screenshotFeatureTemplate,
} from "../components/blocks/feature";
import {
  blockFullScreenHeaderQuery,
  blockFullScreenLogoQuery,
  FullScreenHeaderWithBackground,
  FullScreenLogo,
  fullScreenLogoTemplate,
  fullScreenHeaderTemplate,
} from "../components/blocks/header";
import {
  StatsWithImage,
  blockStatsWithImageQuery,
  statsWithImageTemplate,
} from "../components/blocks/stats";
import { Nav, navQuery } from "../components/nav";
import { Footer, footerQuery } from "../components/footer";
import {
  blockComparisonTable,
  pageBlocksComparisonTableTemplate,
  Pricing,
} from "../components/blocks/pricing";
import {
  blockSlideshowQuery,
  slideshowTemplate,
  Slideshow,
} from "../components/blocks/slideshow";
import { blockNewsQuery, newsTemplate, News } from "./blocks/news";
import type { TinaCollection } from "tinacms";
import { localeQuery } from "./locale-info";

export const blockTemplate = (
  textFields,
  action,
  overlayControls,
  textFieldsSeo,
  testimonial
): TinaCollection => {
  return {
    label: "Page",
    name: "page",
    path: "content/pages",
    fields: [
      {
        label: "Title",
        name: "title",
        required: true,
        type: "string",
      },
      {
        label: "Link",
        name: "link",
        required: true,
        type: "string",
      },
      {
        label: "SEO",
        name: "seo",
        type: "object",
        fields: textFieldsSeo,
      },
      {
        label: "Blocks",
        name: "blocks",
        type: "object",
        list: true,
        templates: [
          newsTemplate(textFields),
          statsWithImageTemplate(textFields),
          heroTemplate(textFields, action),
          slideshowTemplate(textFields, action, overlayControls),
          pageBlocksComparisonTableTemplate(textFields, action),
          featureTemplate(textFields, overlayControls),
          screenshotFeatureTemplate(textFields, action, testimonial),
          fullScreenLogoTemplate(overlayControls),
          fullScreenHeaderTemplate(textFields, action, overlayControls),
        ],
      },
    ],
  };
};

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;
type HomeProps = AsyncReturnType<typeof run>;

export default function Home(props: HomeProps) {
  if (!props) {
    return null;
  }
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
        {props.data.getPageDocument.data.blocks?.map((block, i) => {
          switch (block.__typename) {
            case "PageBlocksFullScreenLogo":
              return <FullScreenLogo {...block} />;
            case "PageBlocksHero":
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
  try {
    return { props: await run({ variables: { relativePath } }) };
  } catch (e) {
    console.log(e);
    return {
      props: JSON.parse(JSON.stringify(e)).response,
    };
  }
};

const run = async ({ variables }) => {
  const chain = Chain("http://localhost:4001/graphql");
  const queryChain = chain("query");
  const chainWithQueryString = {
    query: async <
      T extends Parameters<typeof queryChain>[0],
      B extends Parameters<typeof queryChain>[1]
    >(
      queryObject: T,
      variables?: B
    ) => {
      return {
        query: Zeus("query", queryObject),
        data: await queryChain(queryObject, variables),
      };
    },
  };
  return chainWithQueryString.query(
    {
      getLocaleInfoDocument: [
        {
          relativePath: "main.md",
        },
        localeQuery,
      ],
      getNavigationDocument: [{ relativePath: "main.md" }, navQuery],
      getFooterDocument: [{ relativePath: "main.md" }, footerQuery],
      getThemeDocument: [
        { relativePath: "main.json" },
        {
          dataJSON: true,
        },
      ],
      getPageDocument: [
        { relativePath: variables.relativePath },
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
              "...on PageBlocksComparisonTable": blockComparisonTable,
              "...on PageBlocksHero": blockHeroQuery,
              "...on PageBlocksFeature": blockFeatureQuery,
              "...on PageBlocksScreenShotFeature": blockScreenshotFeatureQuery,
              "...on PageBlocksNews": blockNewsQuery,
              "...on PageBlocksFullScreenLogo": blockFullScreenLogoQuery,
              "...on PageBlocksFullScreenHeader": blockFullScreenHeaderQuery,
              "...on PageBlocksStatsWithImage": blockStatsWithImageQuery,
              "...on PageBlocksSlideshow": blockSlideshowQuery,
            },
          },
        },
      ],
    },
    variables
  );
};
