import Head from "next/head";
import Layout from "../components/layout/layout";

import layout from "../components/layout/layout.module.scss";
import styles from "../styles/work.module.scss";

export default function Work() {
  return (
    <Layout>
      <Head>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <title>mihail-antonov.dev - Work</title>
      </Head>

      <div id="work">
        <div className={layout.container}>
          <div className={styles.wrapper}>
            <div className="work-showcase">
              <h2>Work</h2>
              <p>Кратка информация за работата</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse
                potenti. In turpis nunc, dapibus vitae tincidunt nec, posuere a
                ligula. Duis a eleifend eros, commodo ornare libero. Nunc sit
                amet molestie dui. In porttitor gravida erat, at pellentesque
                elit pharetra sit amet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
            <div className="work-services">
              <h3>Services</h3>
              <p>Информация за видовете работа + cms (под формата на табове)</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse
                potenti. In turpis nunc, dapibus vitae tincidunt nec, posuere a
                ligula. Duis a eleifend eros, commodo ornare libero. Nunc sit
                amet molestie dui. In porttitor gravida erat, at pellentesque
                elit pharetra sit amet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
            <div className="work-types">
              <h2>Types</h2>
              <p>Информация за видовете работа + cms (под формата на табове)</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse
                potenti. In turpis nunc, dapibus vitae tincidunt nec, posuere a
                ligula. Duis a eleifend eros, commodo ornare libero. Nunc sit
                amet molestie dui. In porttitor gravida erat, at pellentesque
                elit pharetra sit amet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
