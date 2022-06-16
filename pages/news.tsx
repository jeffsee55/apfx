import Page, {
  getStaticProps as baseGetStaticProps,
} from "../components/blocks";

export default Page;

export const getStaticProps = () => {
  console.log("get it");
  return baseGetStaticProps({ relativePath: "news.md" });
};
