import "../public/scss/main.scss";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../static/favicon.svg" />
        <link rel="apple-touch-icon" href="../static/favicon.svg" />

        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="-"></meta>
        <meta property="og:site_name" content="NXTT" />
        <meta property="og:locale" content="nl" />
        <meta name="theme-color"></meta>

        <meta name="keywords" content="-" />
        <meta name="apple-mobile-web-app-title" content="NXTT"></meta>
        <meta
          name="description"
          content="Wij bouwen websites die gericht zijn op de toekomst. Die modern zijn, aansluiten bij de doelgroep en helpen bij de automatisering binnen uw organistatie."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
