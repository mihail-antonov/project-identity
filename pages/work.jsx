import Layout from "../components/layout";
import styles from "../components/layout.module.css"
import Head from "next/head";
import Link from "next/link";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      
      <div id="work">
        <div className={styles.container}>
          <div className="work-wrapper">
            <h2>Work page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat volutpat. Cras gravida a augue nec tincidunt. Suspendisse potenti. In turpis nunc, dapibus vitae tincidunt nec, posuere a ligula. Duis a eleifend eros, commodo ornare libero. Nunc sit amet molestie dui. In porttitor gravida erat, at pellentesque elit pharetra sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
