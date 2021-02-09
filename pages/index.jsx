import Layout from "../components/layout";
import styles from "../components/layout.module.css"
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>mihail-antonov.dev</title>
      </Head>

      <div id="home">
        <div className={styles.container}>
          <div className="home-wrapper">
            <h2>Home page</h2>
            <p>This is going to be different. ya know.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
