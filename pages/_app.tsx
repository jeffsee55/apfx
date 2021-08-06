// import "tailwindcss/tailwind.css";
// import "../styles/main.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Theme } from "../components/theme";
import React from "react";
import { LocaleContext } from "../components/locale-info";
const Tina = dynamic(() => import("../components/tina"), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TinaEditProvider
        showEditButton={false}
        editMode={
          <Tina pageProps={pageProps}>
            {(livePageProps) => (
              <Page pageProps={livePageProps} Component={Component} />
            )}
          </Tina>
        }
      >
        <Page pageProps={pageProps} Component={Component} />
      </TinaEditProvider>
    </>
  );
}

const Page = ({ pageProps, Component }) => {
  const router = useRouter();

  const theme = pageProps.data?.getThemeDocument?.dataJSON;
  const currentLocaleInfo =
    pageProps.data.getLocaleInfoDocument.dataJSON[
      router.locale.replace("en-", "") || "au"
    ];
  return (
    <LocaleContext.Provider value={currentLocaleInfo}>
      {theme && <Theme theme={theme} />}
      <Component {...pageProps} />
    </LocaleContext.Provider>
  );
};

export default MyApp;
