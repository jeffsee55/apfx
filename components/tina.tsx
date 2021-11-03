import Tina, { Form, GlobalFormPlugin } from "tinacms";
import { MarkdownFieldPlugin } from "react-tinacms-editor";

const TinaLoader = ({ pageProps, children }) => {
  return (
    <Tina
      branch="main"
      clientId="d94095b9-fb25-40a6-a3ea-277ad5653cb0"
      // isLocalClient={!!process.env.NEXT_PUBLIC_TINA_LOCAL || false}
      isLocalClient={true}
      cmsCallback={(cms) => {
        cms.plugins.add(MarkdownFieldPlugin);
        return cms;
      }}
      formifyCallback={(args, cms) => {
        if (
          [
            "getNavigationDocument",
            "getLocaleInfoDocument",
            "getFooterDocument",
            "getThemeDocument",
          ].includes(args.formConfig.id)
        ) {
          const form = new Form(args.formConfig);
          cms.plugins.add(new GlobalFormPlugin(form, null, "fullscreen"));
          return form;
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
