import link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./footer.module.scss";
import layout from "../layout/layout.module.scss";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={layout.container}>
        <div className={styles.wrapper}>
          <div className={styles.social}>
            <div className={styles.social__icon}>
              <FontAwesomeIcon
                className={styles.social__icon__svg}
                icon={faGithub}
              />
            </div>
            <div className={styles.social__icon}>
              <FontAwesomeIcon
                className={styles.social__icon__svg}
                icon={faLinkedinIn}
              />
            </div>
            <div className={styles.social__icon}>
              <FontAwesomeIcon
                className={styles.social__icon__svg}
                icon={faFacebookF}
              />
            </div>
          </div>
          <div className={styles.copyright}>
            <p>2021 © All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
