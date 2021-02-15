import Head from "next/head"
import Layout from "../components/layout/layout"

import styles from "../components/layout/layout.module.css"
import utilStyles from "../styles/utils.module.css"
import specific from "../styles/specific/about.module.css"


export default function About() {
  return (
    <Layout>
      <Head>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <title>mihail-antonov.dev - About</title>
      </Head>

      <div className="about">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className={styles.grid2}>
              <div className="about-text">
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
              <div className="about-image">
                <p>Text or image here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className={styles.darkwrapper}>
          <div className={styles.container}>
            <h2 className={utilStyles.darkwrappertitle}>Experiences</h2>
            <p className={utilStyles.darkwrappertext}>
              Информация за видовете работа + cms (под формата на табове)
            </p>
            <p className={utilStyles.darkwrappertext}>
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

      <div className="about">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className={styles.grid2}>
              <div className="about-text">
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
              <div className="about-image">
                <p>Text or image here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
