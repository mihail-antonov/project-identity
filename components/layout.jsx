import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "mihail-antonov.dev";
export const googleKeywords = '';
export const googleDescription = '';

export default function Layout({ children, home }) {
  return (
    <>
      <style jsx global>
          {`
          body {
              margin: 0;
            }
            h1, h2, h3, h4, h5 {
                font-family: 'Poppins', sans-serif;
            }
            p {
                font-family: 'Open Sans', sans-serif;
            }
            `}
      </style>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content={googleDescription} />
        <meta name="keywords" content={googleKeywords} />
        <meta name="author" content="Mihail Antonov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <title>{siteTitle}</title>
      </Head>

      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <div className="header-wrapper">
            <h1 className={utilStyles.mainheading}>{siteTitle}</h1>
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer id="footer" className={styles.footer}>
        <div className={styles.container}>
            <div className="header-wrapper">
                <p>Hi there. Thanks for reading this!</p>
            </div>
        </div>
      </footer>
    </>
  );
}
