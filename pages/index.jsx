import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";

import layout from "../components/layout/layout.module.scss";
import cover from "../styles/partials/cover.module.scss";
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

      <div className={cover.cover}>
        <div className={layout.container}>
          <div className={cover.wrapper}>
            <div className={cover.image_box}>
              <Image
                src="/img/avatar.png"
                alt="hi"
                className={cover.image_box_img}
                width="480px"
                height="480px"
              />
            </div>
            <div className={cover.text_box}>
              <p className={cover.text_box_caption}>Hey, I'm Mihail 👋</p>
              <h2 className={cover.text_box_title}>
                Frontend developer based in Bulgaria
              </h2>
              <p className={cover.text_box_paragraph}>
                Who specializes in creating UI/UX design and coding e-commerce
                themes for different content management systems.
              </p>
            </div>
          </div>
        </div>
      </div>

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
