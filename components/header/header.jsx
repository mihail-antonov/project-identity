import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";
import { Twirl as Hamburger } from "hamburger-react";

import styles from "./header.module.scss";
import layout from "../layout/layout.module.scss";

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${styles.nav_item_link_active}` + ``.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={layout.container}>
        <div className={styles.wrapper}>
          <div className={styles.nav_logo}>
            <h1 className={styles.nav_logo_title}>
              <Link href="/">
                <a className={styles.nav_logo_link}>mihail-antonov.dev</a>
              </Link>
            </h1>
          </div>
          <div className={styles.nav_button}>
            <Hamburger size={26} direction="right" />
          </div>
          <div className={styles.nav_bar}>
            <nav className={styles.nav_nav}>
              <ul className={styles.nav_list}>
                {links.map((link, index) => {
                  return (
                    <li key={index} className={styles.nav_item}>
                      <ActiveLink href={link.path}>
                        <a className={styles.nav_item_link}>{link.name}</a>
                      </ActiveLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
