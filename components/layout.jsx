import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

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
                color: #121212;
                font-family: 'Manrope', sans-serif;
                font-weight: 500;
                margin: 0 0 15px 0;
            }
            p {
                color: #121212;
                font-family: 'Roboto', sans-serif;
                margin: 0 0 15px 0;
                line-height: 1.6;
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
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <title>{siteTitle}</title>
      </Head>

      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerwrapper}>
            <div className="header-wrapper-logo">
              <h1 className={utilStyles.logotitle}><a href="/" className={utilStyles.logotitlelink}>{siteTitle}</a></h1>
            </div>
            <div className={styles.headerwrapperbtn}>
              <IconButton style={{ color: '#121212' }} aria-label="menu-collapse">
                <MenuIcon />
              </IconButton>
            </div>
            <div className={styles.headerwrappernav}>
              <nav>
                <ul>
                  <li className={styles.headernavli}>
                    <Link href="/">
                      <a className={styles.headernavlink}>Home</a>
                    </Link>
                  </li>
                  <li className={styles.headernavli}>
                    <Link href="/work">
                      <a className={styles.headernavlink}>Work</a>
                    </Link>
                  </li>
                  <li className={styles.headernavli}>
                    <Link href="/about">
                      <a className={styles.headernavlink}>About</a>
                    </Link>
                  </li>
                  <li className={styles.headernavli}>
                    <Link href="/contact">
                      <a className={styles.headernavlink}>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
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
