import Tina from "tinacms";
import { MarkdownFieldPlugin } from "react-tinacms-editor";

const TinaLoader = ({ pageProps, children }) => {
  return (
    <Tina
      useUnstable={true}
      config={{
        branch: "main",
        clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
        isLocalClient: !process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
      }}
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
