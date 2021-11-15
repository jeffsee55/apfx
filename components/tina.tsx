import Tina from "tinacms";
import { MarkdownFieldPlugin } from "react-tinacms-editor";

const TinaLoader = ({ pageProps, children }) => {
  return (
    <Tina
      // branch="main"
      branch="local-dev"
      clientId="950fddaa-788b-4f82-8cf7-8de3581ed936"
      isLocalClient={false}
      tinaioConfig={{
        contentApiUrlOverride: "https://content.jsee.tinajs.dev",
        frontendUrlOverride: "http://localhost:3002",
        identityApiUrlOverride: "https://identity.jsee.tinajs.dev",
      }}
      // clientId="d94095b9-fb25-40a6-a3ea-277ad5653cb0"
      // isLocalClient={!!process.env.NEXT_PUBLIC_TINA_LOCAL || false}
      // isLocalClient={true}
      cmsCallback={(cms) => {
        cms.plugins.add(MarkdownFieldPlugin);
        return cms;
      }}
      formifyCallback={(args) => {
        if (
          [
            "getNavigationDocument",
            "getLocaleInfoDocument",
            "getFooterDocument",
            "getThemeDocument",
          ].includes(args.formConfig.id)
        ) {
          return args.createGlobalForm(args.formConfig);
        }
        return args.createForm(args.formConfig);
      }}
      {...pageProps}
    >
      {(livePageProps) => children(livePageProps)}
    </Tina>
  );
};

export default TinaLoader;
