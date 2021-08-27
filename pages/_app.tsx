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
    pageProps.data?.getLocaleInfoDocument?.dataJSON[
      router.locale.replace("en-", "") || "au"
    ] || {};
  return (
    <LocaleContext.Provider value={currentLocaleInfo}>
      {theme && <Theme theme={theme} />}
      <Component {...pageProps} />
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/9348530.js"
      ></script>
      <script async defer type="text/javascript">
        {`_linkedin_partner_id = "3408244";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
      </script>
      {/* <noscript>
        <img
          height="1"
          width="1"
          style="display:none;"
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=3408244&fmt=gif"
        />
      </noscript> */}
    </LocaleContext.Provider>
  );
};

export default MyApp;
