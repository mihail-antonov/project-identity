import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Button from "../components/button/button";

import ShoppingBasketTwoToneIcon from "@material-ui/icons/ShoppingBasketTwoTone";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

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

      <div className={styles.hello}>
        <div className={layout.container}>
          <div className={styles.hello__wrapper}>
            <div className={styles.hello__headings}>
              <p className={styles.hello__caption}>Hey, my name is</p>
              <h1 className={styles.hello__title}>Mihail Antonov</h1>
              <p className={styles.hello__subtitle}>
                I code things for the web.
              </p>
            </div>
            <div className={styles.hello__content}>
              <p className={styles.hello__text}>
                I'm a frontend web developer based in Veliko Turnovo, BG
                specializing in coding (and ocasionally designing) different
                types of websites.
              </p>
              <Button href="/contact" title="Get in Touch" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={layout.container}>
          <div className={styles.about__wrapper}>
            <h2 className={styles.about__title}>About Me</h2>
            <div className={layout.grid2}>
              <div className={styles.about__content}>
                <p className={styles.about__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tellus ligula.
                </p>
                <p className={styles.about__text}>
                  Aenean eleifend, eros vitae condimentum efficitur, est libero
                  euismod neque, placerat semper ipsum ex eu dolor. Donec
                  lobortis egestas consectetur. Aenean ut cursus velit, rutrum
                  faucibus mi.
                </p>
                <p className={styles.about__text}>
                  Praesent vestibulum placerat fermentum. Donec in dapibus enim,
                  quis hendrerit leo. Sed tristique consectetur ultrices. Aenean
                  sed egestas turpis.
                </p>
                <p className={styles.about__text}>
                  Skills that I possess for now:
                </p>
                <Button href="/about" title="More Info" />
              </div>
              <div className={styles.about__image}>Image of Me here.</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={layout.container}>
          <div className={styles.project__wrapper}>
            <div className={styles.project__headings}>
              <p className={styles.project__subtitle}>Latest Projects</p>
              <h2 className={styles.project__title}>My recent projects</h2>
            </div>
            <div className={styles.project__content}>
              <div className={layout.grid3}>
                <div className={styles.project__box}>
                  <div className={styles.project__box__icons}>
                    <div className={styles.project__icons__main}>
                      <HomeWorkTwoToneIcon />
                    </div>
                    <div className={styles.project__icons__links}>
                      <OpenInNewIcon />
                    </div>
                  </div>
                  <div className={styles.project__box__content}>
                    <h4 className={styles.project__box__title}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h4>
                    <p className={styles.project__box__text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam tellus ligula, fringilla in imperdiet.
                    </p>
                  </div>
                  <div className={styles.project__box__tech}>
                    <ul className={styles.project__box__list}>
                      <li className={styles.project__box_item}>NextJS</li>
                      <li className={styles.project__box_item}>SCSS</li>
                      <li className={styles.project__box_item}>GraphCMS</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.project__box}>
                  <div className={styles.project__box__icons}>
                    <div className={styles.project__icons__main}>
                      <ShoppingBasketTwoToneIcon />
                    </div>
                    <div className={styles.project__icons__links}>
                      <OpenInNewIcon />
                    </div>
                  </div>
                  <div className={styles.project__box__content}>
                    <h4 className={styles.project__box__title}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h4>
                    <p className={styles.project__box__text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam tellus ligula, fringilla in imperdiet.
                    </p>
                  </div>
                  <div className={styles.project__box__tech}>
                    <ul className={styles.project__box__list}>
                      <li className={styles.project__box_item}>NextJS</li>
                      <li className={styles.project__box_item}>SCSS</li>
                      <li className={styles.project__box_item}>GraphCMS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Button href="/work" title="View Portfolio" />
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={layout.container}>
          <div className={styles.contact__wrapper}>
            <div className={styles.contact__headings}>
              <p className={styles.contact__subtitle}>What's Next?</p>
              <h3 className={styles.contact__title}>Get in Touch</h3>
            </div>
            <div className={styles.contact__content}>
              <p className={styles.contact__text}>
                Aenean eleifend, eros vitae condimentum efficitur, est libero
                euismod neque, placerat semper ipsum ex eu dolor. Donec lobortis
                egestas consectetur. Aenean ut cursus velit, rutrum faucibus mi.
              </p>
            </div>
            <Button href="/contact" title="Get in Touch" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
