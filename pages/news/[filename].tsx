import Head from "next/head";
import { useTina } from "tinacms/dist/edit-state";
import { Chain, Zeus } from "../../zeus";
import { News } from "../../components/news";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;
type HomeProps = AsyncReturnType<typeof getStaticProps>["props"];

export default function Home(p: HomeProps) {
  const props = useTina<typeof p>(p);
  if (!props.data) {
    return <div>No data</div>;
  }
  return (
    <>
      <Head>
        <title>{props.data.getNewsDocument.data.title}</title>
        <meta
          property="og:title"
          content={props.data.getNewsDocument.data.title}
        />
        <meta name="description" property="og:description" content={""} />
        <meta
          property="og:image"
          content={props.data.getNewsDocument.data.image}
        />
      </Head>

      <main>
        {props.data.getNavigationDocument.data && (
          <Nav {...props.data.getNavigationDocument.data} />
        )}
        <News {...props.data.getNewsDocument.data} />
        {props.data.getFooterDocument.data && (
          <Footer {...props.data.getFooterDocument.data} />
        )}
      </main>
    </>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { filename: string };
}) => {
  const { filename } = params;
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
  try {
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
      getNewsDocument: [
        { relativePath: `${filename}.md` },
        {
          data: {
            title: true,
            image: true,
            subTitle: true,
            body: true,
          },
        },
      ],
    });
    return { props: listCardsAndDraw };
  } catch (e) {
    return {
      props: JSON.parse(JSON.stringify(e)).response,
    };
  }
};

export const getStaticPaths = async () => {
  const chain = Chain("http://localhost:4001/graphql", {});
  const paths = await chain.query({
    getNewsList: [
      {},
      {
        edges: {
          node: {
            sys: {
              filename: true,
            },
          },
        },
      },
    ],
  });
  const paths2 = paths.getNewsList.edges.map((edge) => {
    return { params: { filename: edge.node.sys.filename } };
  });
  const paths3 = [];
  ["en-us", "en-gb", "en-au"].forEach((locale) => {
    paths2.forEach((p2) => {
      paths3.push({ ...p2, locale });
    });
  });
  return {
    paths: paths3,
    fallback: "blocking",
  };
};
