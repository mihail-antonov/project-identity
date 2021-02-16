import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout";
import TextField from "@material-ui/core/TextField";

import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import specific from "../styles/specific/about.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <title>mihail-antonov.dev - Contact</title>
      </Head>

      <div className="contact-title">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className="contact-title-content">
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
                  Hello! I've been waiting for you.
                </h2>
                <p className={utilStyles.titlesubtext}>
                  Fill in the contact form or{" "}
                  <span className={utilStyles.titlehighlight}>
                    Send me an email
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className={styles.container}>
          <div className={styles.mainwrapper}>
            <div className="contact-info">
              <h2>Contact info</h2>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Your name"
                  placeholder="What's your name?"
                />
                <TextField
                  id="standard-basic"
                  label="Your email"
                  placeholder="And your email?"
                />
              </form>
            </div>
            <div className="contact-form">
              <h2>Contact form</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                fermentum mi sem, vel malesuada purus bibendum vel. Aliquam erat
                volutpat. Cras gravida a augue nec tincidunt. Suspendisse
                potenti. In turpis nunc, dapibus vitae tincidunt nec, posuere a
                ligula. Duis a eleifend eros, commodo ornare libero. Nunc sit
                amet molestie dui. In porttitor gravida erat, at pellentesque
                elit pharetra sit amet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
