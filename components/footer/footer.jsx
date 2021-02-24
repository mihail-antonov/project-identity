import link from "next/link";

import styles from "./footer.module.scss";
import layout from "../layout/layout.module.scss";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={layout.container}>
        <div className={styles.wrapper}>
          <div className={styles.social}>
            <p>Socials Links here</p>
          </div>
          <div className={styles.copyright}>
            <p>2021 © All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
