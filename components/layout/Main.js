import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ title, children }) {
  const [defaultTitle, setDefaultTitle] = useState("");

  useEffect(() => {
    setDefaultTitle(process.env.APP_NAME);
  }, []);

  const pageTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header/>
      <div className="layout">{children}</div>
      <Footer/>
    </div>
  );
}

export default Layout;
