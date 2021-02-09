import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Mihail Antonov";
export const siteTitle = "mihail-antonov.dev";

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <title>{siteTitle}</title>
            </Head>

            <header id="header">
                <div className={styles.container}>
                    <h1 className={utilStyles.heading2Xl}>General Kenobi!</h1>
                </div>
            </header>
            <main id="main">
                {children}
                </main>
            <footer id="footer">
                <div className={styles.container}>qwerty</div>
            </footer>
        </>
    );
}
