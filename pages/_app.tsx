// import "tailwindcss/tailwind.css";
// import "../styles/main.css";
import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Theme } from "../components/theme";
import React from "react";
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
  const theme = pageProps.data?.getThemeDocument?.dataJSON;
  return (
    <>
      {theme && <Theme theme={theme} />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
