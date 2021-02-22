import Head from "next/head";
import Header from "../header/header";
import Footer from "../footer/footer";

import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";

export const siteTitle = "";
export const googleKeywords = "";
export const googleDescription = "";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={googleDescription} />
        <meta name="keywords" content={googleKeywords} />
        <meta name="author" content="Mihail Antonov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{siteTitle}</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <Header />
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </>
  );
}
