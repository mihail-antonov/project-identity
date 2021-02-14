import Head from "next/head"
import Image from "next/image"
import Layout from "../components/layout/layout"

import styles from "../components/layout/layout.module.css"
import utilStyles from "../styles/utils.module.css"
import specific from "../styles/specific/index.module.css"


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>mihail-antonov.dev</title>
        <meta name="description" content="Testing the new googleDescription variables." />
        <meta name="keywords" content="contact a web developer, contact, web, developer, dev" />
      </Head>

      <div className="home-hello">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className="home-hello-content">
              <div className={specific.homehelloavatar}>
                <Image src="/img/avatar.png" alt="hi" className={specific.homehelloavatarimg} width="480px" height="480px" />
              </div>
              <div className="home-hello-text">
                <h2>Hey, I'm Mihail!</h2>
                <p>I game, code and drink coffee.</p>
                <p>Frontend developer who specializes in creating UI/UX design and coding e-commerce templates for different CMS. Basicly everything for you online shop.</p>
                <button className={styles.calltoaction}>Contact me</button>
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
