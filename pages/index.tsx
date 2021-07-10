import Page, { getStaticProps as baseGetStaticProps } from "../components/page";

export default Page;

export const getStaticProps = () => {
  return baseGetStaticProps({ relativePath: "meh.md" });
};
