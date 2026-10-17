import Script from "next/script";

export function Analytics() {
  // Keep local previews out of the live site's marketing analytics.
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <>
      <Script
        id="hs-script-loader"
        src="https://js-na1.hs-scripts.com/9348530.js"
        strategy="afterInteractive"
      />
      <Script id="linkedin-insight" strategy="afterInteractive">{`
      window._linkedin_partner_id = "3408244";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
      (function(l) {
        if (!l) {
          window.lintrk = function(a,b) { window.lintrk.q.push([a,b]); };
          window.lintrk.q = [];
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        document.head.appendChild(script);
      })(window.lintrk);
    `}</Script>
    </>
  );
}
