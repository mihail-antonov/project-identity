import Head from "next/head";
import Image from "next/image";
import Cover from "../components/cover/cover";
import Layout from "../components/layout/layout";

import layout from "../components/layout/layout.module.scss";
import styles from "../styles/index.module.scss";

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

      <Cover
        coverImage="/img/avatar.png"
        coverAlt="Welcome"
        coverCaption="Hey, I'm Mihail 👋"
        coverTitle="Frontend developer based in Bulgaria"
        coverParagraph="Who specializes in creating UI/UX design and coding e-commerce themes for different content management systems."
      />

      <div className="home-about">
        <div className={layout.container}>
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
