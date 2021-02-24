import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout";
import TextField from "@material-ui/core/TextField";

import layout from "../components/layout/layout.module.scss";
import cover from "../styles/partials/cover.module.scss";
import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <title>mihail-antonov.dev - Contact</title>
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
              <h2 className={cover.text_box_title}>
                Frontend developer with a vision
              </h2>
              <p className={cover.text_box_paragraph}>
                I game, code and drink coffee.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className={layout.container}>
          <div className={styles.wrapper}>
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
