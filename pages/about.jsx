import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";
import { GraphQLClient } from "graphql-request";

import CallMadeIcon from "@material-ui/icons/CallMade";

import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import specific from "../styles/specific/about.module.css";

export default function About({ works, educations }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <title>mihail-antonov.dev - About</title>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <h2 className={utilStyles.sub__heading}>Resume</h2>
            <div className={styles.grid2}>
              <div className="work-content">
                <h3 className={specific.resume__subtitle}>Work Experience</h3>
                <div className="work-firm">
                  {works.map(
                    ({
                      index,
                      work_title,
                      work_url,
                      work_position,
                      work_period,
                    }) => (
                      <div key={index} className={specific.resume__box}>
                        <Link href={work_url}>
                          <a className={specific.resume__title} target="_blank">
                            {work_title}
                            <CallMadeIcon className={specific.resume__icon} />
                          </a>
                        </Link>
                        <p className={specific.resume__position}>
                          {work_position}
                        </p>
                        <p className={specific.resume__period}>{work_period}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="education-content">
                <h3 className={specific.resume__subtitle}>Education</h3>
                <div className="education-institution">
                  {educations.map(
                    ({
                      index,
                      education_title,
                      education_url,
                      education_position,
                      education_period,
                    }) => (
                      <div key={index} className={specific.resume__box}>
                        <Link href={education_url}>
                          <a className={specific.resume__title} target="_blank">
                            {education_title}
                            <CallMadeIcon />
                          </a>
                        </Link>
                        <p className={specific.resume__position}>
                          {education_position}
                        </p>
                        <p className={specific.resume__period}>
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
      </div>

      <div className="skills">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <h2 className={utilStyles.sub__heading}>Skills</h2>
            <div className={styles.grid3}>
              <div className="skills-development">
                <h3 className={specific.resume__subtitle}>Development</h3>
              </div>
              <div className="skills-cms">
                <h3 className={specific.resume__subtitle}>CMS</h3>
              </div>
              <div className="skills-tools">
                <h3 className={specific.resume__subtitle}>Tools</h3>
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
