import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Cover from "../components/cover/cover";
import { GraphQLClient } from "graphql-request";
import CallMadeIcon from "@material-ui/icons/CallMade";

import layout from "../components/layout/layout.module.scss";
import styles from "../styles/about.module.scss";

export default function About({ works, educations }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <title>mihail-antonov.dev - About</title>
      </Head>

      <Cover
        coverImage="/img/avatar.png"
        coverAlt="About Me"
        coverCaption=""
        coverTitle="Frontend developer with a vision"
        coverParagraph="I game, code and drink coffee."
      />

      <div className={styles.resume}>
        <div className={layout.container}>
          <div className={styles.wrapper}>
            <h2 className={styles.resume__heading}>Resume</h2>
            <div className={layout.grid2}>
              <div className={styles.resume__content}>
                <h3 className={styles.resume__subheading}>Work Experience</h3>
                {works.map(
                  ({ work_title, work_url, work_position, work_period }) => (
                    <div className={styles.resume__box}>
                      <Link href={work_url}>
                        <a className={styles.resume__brand} target="_blank">
                          {work_title}
                          <CallMadeIcon className={styles.resume__icon} />
                        </a>
                      </Link>
                      <p className={styles.resume__position}>{work_position}</p>
                      <p className={styles.resume__period}>{work_period}</p>
                    </div>
                  )
                )}
              </div>
              <div className={styles.resume__content}>
                <h3 className={styles.resume__subheading}>Education</h3>
                {educations.map(
                  ({
                    education_title,
                    education_url,
                    education_position,
                    education_period,
                  }) => (
                    <div className={styles.resume__box}>
                      <Link href={education_url}>
                        <a className={styles.resume__brand} target="_blank">
                          {education_title}
                          <CallMadeIcon />
                        </a>
                      </Link>
                      <p className={styles.resume__position}>
                        {education_position}
                      </p>
                      <p className={styles.resume__period}>
                        {education_period}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.skills}>
        <div className={layout.container}>
          <div className={styles.wrapper}>
            <h2 className={styles.sub__heading}>Skills</h2>
            <div className={layout.grid3}>
              <div className="skills-development">
                <h3 className={styles.resume__subtitle}>Development</h3>
              </div>
              <div className="skills-cms">
                <h3 className={styles.resume__subtitle}>CMS</h3>
              </div>
              <div className="skills-tools">
                <h3 className={styles.resume__subtitle}>Tools</h3>
              </div>
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

  const { works, educations } = await graphcms.request(
    `
      {
        works 
        {
          work_title
          work_url
          work_position
          work_period
        }

        educations 
        {
          education_title
          education_url
          education_position
          education_period
        }
      }
    `
  );

  return {
    props: {
      works,
      educations,
    },
  };
}
