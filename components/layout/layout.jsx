import Head from "next/head"

import Link from 'next/link'
import { IconButton } from '@material-ui/core';

import ActiveLink from '../links/activelinks'
import { Cross as Hamburger } from 'hamburger-react'
import GitHubIcon from '@material-ui/icons/GitHub';

import styles from "../layout/layout.module.css"
import utilStyles from "../../styles/utils.module.css"

export const siteTitle = ''
export const googleKeywords = ''
export const googleDescription = ''

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content={googleDescription} />
        <meta name="keywords" content={googleKeywords} />
        <meta name="author" content="Mihail Antonov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{siteTitle}</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" />
      </Head>

      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerwrapper}>
            <div className="header-wrapper-logo">
              <h1 className={utilStyles.logotitle}>
                <a href="/" className={utilStyles.logotitlelink}>mihail-antonov.dev</a>
              </h1>
            </div>
            <div className={styles.headerwrapperbtn}>
            <Hamburger size={24} direction="right" />
            </div>
            <div className={styles.headerwrappernav}>
              <nav>
                <ul>
                  <li className={styles.headernavli}>
                    <ActiveLink activeClassName="active" href="/">
                      <a className={styles.headernavlink}>Home</a>
                    </ActiveLink>
                  </li>
                  <li className={styles.headernavli}>
                    <ActiveLink activeClassName="active" href="/work">
                      <a className={styles.headernavlink}>Work</a>
                    </ActiveLink>
                  </li>
                  <li className={styles.headernavli}>
                    <ActiveLink activeClassName="active" href="/about">
                      <a className={styles.headernavlink}>About</a>
                    </ActiveLink>
                  </li>
                  <li className={styles.headernavli}>
                    <ActiveLink activeClassName="active" href="/contact">
                      <a className={styles.headernavlink}>Contacts</a>
                    </ActiveLink>
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
          <div className={styles.footerwrapper}>
            <div className="footer-wrapper-socials">
              <p>Socials Links here</p>
            </div>
            <div className="footer-wrapper-name">
              <p>hi@mihail-antonov.dev</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
