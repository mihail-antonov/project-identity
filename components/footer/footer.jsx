import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.scss";
import layout from "../layout/layout.module.scss";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={layout.container}>
        <div className={styles.wrapper}>
          <div className={styles.social}>
            <div className={styles.social__icon}>
              <Link href="https://github.com/mihail-antonov">
                <a target="_blank">
                  <Image
                    src="/img/social/github.svg"
                    alt="Github Profile"
                    width={22}
                    height={22}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.social__icon}>
              <Link href="https://www.facebook.com/mihail.antonov.0/">
                <a target="_blank">
                  <Image
                    src="/img/social/facebook.svg"
                    alt="Facebook Profile"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.social__icon}>
              <Link href="https://www.linkedin.com/in/mihail-antonov/">
                <a target="_blank">
                  <Image
                    src="/img/social/linkedin.svg"
                    alt="LinkedIn Profile"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.copyright}>
            <p className={styles.copyright__text}>
              Designed & Coded by Mihail Antonov
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
