import Layout from "../components/layout";
import styles from "../components/layout.module.css"
import Head from "next/head";

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
      <div className="home-about">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className={styles.grid2}>
              
              <div className="home-about-info">
              <p>ABOUT ME</p><hr />
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec diam vel enim aliquet vestibulum.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec diam vel enim aliquet vestibulum. Etiam commodo non dolor vel elementum. Fusce eu turpis ut neque ultrices dapibus ac vel ante. Donec at massa sed lacus ultricies interdum. Phasellus eleifend, urna ac efficitur facilisis, sapien velit facilisis leo, in eleifend sapien ipsum commodo ex.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
