import Tina from "tinacms";
import { MarkdownFieldPlugin } from "react-tinacms-editor";

const TinaLoader = ({ pageProps, children }) => {
  return (
    <Tina
      branch="main"
      clientId="d94095b9-fb25-40a6-a3ea-277ad5653cb0"
      isLocalClient={true}
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
