import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Button from "../components/button/button";
import { GraphQLClient } from "graphql-request";

import DetailsIcon from "@material-ui/icons/Details";
import DetailsTwoToneIcon from "@material-ui/icons/DetailsTwoTone";
import ShoppingBasketTwoToneIcon from "@material-ui/icons/ShoppingBasketTwoTone";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import layout from "../components/layout/layout.module.scss";
import styles from "../styles/index.module.scss";

export default function Home({ projects }) {
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
                I'm a freelance frontend web developer based in Veliko Tarnovo,
                BG specializing in coding (and ocasionally designing) different
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
            <div className={styles.about__headings}>
              <h2 className={styles.about__title}>About Me</h2>
            </div>
            <div className={layout.grid2}>
              <div className={styles.about__info}>
                <div className={styles.about__content}>
                  <p className={styles.about__text}>
                    Hello! I'm Mihail, a freelance frontend web developer based
                    in Veliko Tarnovo, BG.
                  </p>
                  <p className={styles.about__text}>
                    Aenean eleifend, eros vitae condimentum efficitur, est
                    libero euismod neque, placerat semper ipsum ex eu dolor.
                    Donec lobortis egestas consectetur. Aenean ut cursus velit,
                    rutrum faucibus mi.
                  </p>
                  <p className={styles.about__text}>
                    Praesent vestibulum placerat fermentum. Donec in dapibus
                    enim, quis hendrerit leo. Sed tristique consectetur
                    ultrices. Aenean sed egestas turpis.
                  </p>
                  <p className={styles.about__text}>
                    Few recent technologies I have been working with:
                  </p>
                  <ul className={styles.about__list}>
                    <li className={styles.about__item}>
                      <DetailsIcon />
                      JavaScript
                    </li>
                    <li className={styles.about__item}>
                      <DetailsIcon />
                      HTML
                    </li>
                    <li className={styles.about__item}>
                      <DetailsIcon />
                      SCSS
                    </li>
                    <li className={styles.about__item}>
                      <DetailsIcon />
                      ReactJS
                    </li>
                  </ul>
                </div>
                <div className={styles.about__button}>
                  <Button href="/about" title="More Info" />
                </div>
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
                {projects.map(
                  ({
                    project_title,
                    project_icon,
                    project_url,
                    project_description,
                    project_technologies,
                  }) => (
                    <div className={styles.project__box} key={projects.id}>
                      <div className={styles.project__box__icons}>
                        <div className={styles.project__icons__main}>
                          {
                            {
                              Website: <DetailsTwoToneIcon />,
                              eCommerce: <ShoppingBasketTwoToneIcon />,
                            }[project_icon]
                          }
                        </div>
                        <div className={styles.project__icons__links}>
                          <Link href={project_url}>
                            <a target="_blank">
                              <OpenInNewIcon />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className={styles.project__box__content}>
                        <h4 className={styles.project__box__title}>
                          {project_title}
                        </h4>
                        <p className={styles.project__box__text}>
                          {project_description}
                        </p>
                      </div>
                      <div className={styles.project__box__tech}>
                        <ul className={styles.project__box__list}>
                          {project_technologies.map((project_technologies) => (
                            <li className={styles.project__box_item}>
                              {project_technologies}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.project__button}>
              <Button href="/work" title="View Portfolio" />
            </div>
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
            <div className={styles.contact__button}>
              <Button href="/contact" title="Get in Touch" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/cklat581wxmoi01z66jvg7lqt/master"
  );

  const { projects } = await graphcms.request(
    `
    {
      projects 
      {
        project_title
        project_icon
        project_url
        project_description
        project_technologies
      }
    }
    `
  );

  return {
    props: {
      projects,
    },
  };
}
