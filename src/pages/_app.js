import '@/styles/globals.css';
import '@/styles/fonts.css';
import Layout from '@/component/layout';
import Meta from '@/component/layout/meta';
import { usePathname } from 'next/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const routeName = pathname?.replace(/[/\-]/g, ' ')?.charAt(1)?.toUpperCase() + pathname?.slice(2);

  return (
    <>
      {/* ✅ Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PWSZS05NVH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PWSZS05NVH');
  `}
      </Script>

      <Meta
        title={`${routeName}${routeName.length < 1 ? "" : " | "}  Ai Sante`}
        description="Welcome to the home page of Ai Sante."
        keywords="pharma, aisante, nextjs"
      />
      {/* ✅ Schema Markup */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI Sante",
            "url": "http://103.247.19.158:3000/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "http://103.247.19.158:3000/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
