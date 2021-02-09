import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <div className="about">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className="about">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse potenti.
                In turpis nunc, dapibus vitae tincidunt nec, posuere a ligula.
                Duis a eleifend eros, commodo ornare libero. Nunc sit amet
                molestie dui. In porttitor gravida erat, at pellentesque elit
                pharetra sit amet. Interdum et malesuada fames ac ante ipsum
                primis in faucibus.
                </p>
            </div>
            <div className="quote">
              <h3>Quote</h3>
              <p>Информация за видовете работа + cms (под формата на табове)</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse potenti.
                In turpis nunc, dapibus vitae tincidunt nec, posuere a ligula.
                Duis a eleifend eros, commodo ornare libero. Nunc sit amet
                molestie dui. In porttitor gravida erat, at pellentesque elit
                pharetra sit amet. Interdum et malesuada fames ac ante ipsum
                primis in faucibus.
              </p>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse potenti.
                In turpis nunc, dapibus vitae tincidunt nec, posuere a ligula.
                Duis a eleifend eros, commodo ornare libero. Nunc sit amet
                molestie dui. In porttitor gravida erat, at pellentesque elit
                pharetra sit amet. Interdum et malesuada fames ac ante ipsum
                primis in faucibus.
                </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
