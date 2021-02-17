import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";

import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import specific from "../styles/specific/index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Testing the new googleDescription variables."
        />
        <meta
          name="keywords"
          content="contact a web developer, contact, web, developer, dev"
        />
        <title>mihail-antonov.dev</title>
      </Head>

      <div className="home-title">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className="home-title-content">
              <div className={styles.titleavatar}>
                <Image
                  src="/img/avatar.png"
                  alt="hi"
                  className={styles.titleavatarimg}
                  width="480px"
                  height="480px"
                />
              </div>
              <div className={styles.titletextbox}>
                <p className={utilStyles.titlesubheading}>Hey, I'm Mihail 👋</p>
                <h2 className={utilStyles.titleheading}>
                  Frontend developer based in Bulgaria
                </h2>
                <p className={utilStyles.titlesubtext}>
                  Frontend developer who specializes in creating UI/UX design
                  and coding e-commerce themes for different content management
                  systems. Basicly{" "}
                  <span className={utilStyles.titlehighlight}>Everthing</span>{" "}
                  for you online shop
                </p>
                <Link href="/contact">
                  <button className={utilStyles.calltoaction}>
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-about">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className={styles.grid2}>
              <div className="home-about-info">
                <p>ABOUT ME</p>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec diam vel enim aliquet vestibulum.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec diam vel enim aliquet vestibulum. Etiam commodo non
                  dolor vel elementum. Fusce eu turpis ut neque ultrices dapibus
                  ac vel ante. Donec at massa sed lacus ultricies interdum.
                  Phasellus eleifend, urna ac efficitur facilisis, sapien velit
                  facilisis leo, in eleifend sapien ipsum commodo ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
