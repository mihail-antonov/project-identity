import Layout from "../components/layout";
import styles from "../components/layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Head from "next/head";
import Link from "next/link";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div id="main">
      <div className={styles.container}>
            <h1 className={utilStyles.heading2Xl}>General Kenobi!</h1>
          </div>
      </div>
    </Layout>
  );
}
