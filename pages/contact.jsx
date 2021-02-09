import Layout from "../components/layout";
import styles from "../components/layout.module.css"
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>mihail-antonov.dev</title>
        <meta name="description" content="Testing the new googleDescription variables." />
        <meta name="keywords" content="contact a web developer, contact, web, developer, dev" />
      </Head>

      <div id="contact">
        <div className={styles.container}>
          <div className="contact-wrapper">
            <h2>Contact page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat volutpat. Cras gravida a augue nec tincidunt. Suspendisse potenti. In turpis nunc, dapibus vitae tincidunt nec, posuere a ligula. Duis a eleifend eros, commodo ornare libero. Nunc sit amet molestie dui. In porttitor gravida erat, at pellentesque elit pharetra sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
