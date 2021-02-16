import Head from "next/head"
import Header from "../header/header"
import Footer from "../footer/footer"

import styles from "./layout.module.css"
import utilStyles from "../../styles/utils.module.css"

export const siteTitle = ''
export const googleKeywords = ''
export const googleDescription = ''

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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" />
      </Head>

      <header id="header">
        <div className={styles.container}>
          <Header />
        </div>
      </header>

      <main id="main">
        {children}
      </main>

      <footer id="footer">
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </>
  );
}
