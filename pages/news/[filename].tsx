import Head from "next/head";
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

export default function Home(props: HomeProps) {
  if (!props.data) {
    return <div>No data</div>;
  }
  return (
    <>
      <Head>
        <title>{props.data.getNewsDocument.data.title}</title>
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
  params: { filename },
}: {
  params: { filename: string };
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
  // } catch (e) {
  //   return {
  //     props: JSON.parse(JSON.stringify(e)).response,
  //   };
  // }
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
  const meh = {
    paths: paths.getNewsList.edges.map((edge) => {
      return { params: { filename: edge.node.sys.filename } };
    }),
    fallback: true,
  };
  console.log(JSON.stringify(meh, null, 2));
  return meh;
};
