import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";

import CallMadeIcon from "@material-ui/icons/CallMade";

import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import specific from "../styles/specific/about.module.css";

const education = [
  {
    name: "University of Veliko Turnovo",
    url: "https://www.uni-vt.bg/eng/",
    specialty: "Computer Science",
    duration: "2018 - Current",
  },
  {
    name: "Software University",
    url: "https://softuni.bg/",
    specialty: "Programming",
    duration: "2014 - 2016",
  },
  {
    name: "High School of Natural Sciences and Mathematics",
    url: "https://www.pmg-silistra.com/",
    specialty: "Computer science and Mathematics",
    duration: "2009 - 2014",
  },
];

const career = [
  {
    name: "Mihail-antonov.dev",
    url: "https://mihail-antonov.dev",
    occupation: "Freelance Web Developer",
    duration: "August 2020 - Current",
  },
  {
    name: "Antonov Clima",
    url: "https://antonovclima.com",
    occupation: "Non-IT related work",
    duration: "June 2016 - February 2019",
  },
];

export default function About() {
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

      <div className="resume">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <h2>Resume</h2>
            <div className={styles.grid2}>
              <div className="work-content">
                <h3 className={specific.resume__subtitle}>Work Experience</h3>
                <div className="work-firm">
                  {career.map((career, index) => {
                    return (
                      <div key={index} className={specific.resume__box}>
                        <h4>
                          <Link href={career.url}>
                            <a
                              className={specific.resume__title}
                              target="_blank"
                            >
                              {career.name}
                            </a>
                          </Link>
                          <CallMadeIcon />
                        </h4>
                        <p className={specific.resume__specialty}>
                          {career.occupation}
                        </p>
                        <p className={specific.resume__duration}>
                          {career.duration}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="education-content">
                <h3 className={specific.resume__subtitle}>Education</h3>
                <div className="education-institution">
                  {education.map((education, index) => {
                    return (
                      <div key={index} className={specific.resume__box}>
                        <h4>
                          <Link href={education.url}>
                            <a
                              className={specific.resume__title}
                              target="_blank"
                            >
                              {education.name} <CallMadeIcon />
                            </a>
                          </Link>
                        </h4>
                        <p className={specific.resume__specialty}>
                          {education.specialty}
                        </p>
                        <p className={specific.resume__duration}>
                          {education.duration}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <h2>Skills</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
