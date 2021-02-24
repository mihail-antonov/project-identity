import Head from "next/head";
import Header from "../header/header";
import Footer from "../footer/footer";

export const siteTitle = "";
export const googleKeywords = "";
export const googleDescription = "";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={googleDescription} />
        <meta name="keywords" content={googleKeywords} />
        <meta name="author" content="Mihail Antonov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
      </Head>

      <Header />

      <main id="main">{children}</main>

      <Footer />
    </>
  );
}
