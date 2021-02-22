import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";
import PropTypes from "prop-types";
import { Twirl as Hamburger } from "hamburger-react";
import styles from "./header.module.css";

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} active`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
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
    <div className={styles.wrapper}>
      <div className={styles.nav_logo}>
        <h1 className={styles.logotitle}>
          <Link href="/">
            <a className={styles.logotitlelink}>mihail-antonov.dev</a>
          </Link>
        </h1>
      </div>
      <div className={styles.nav_button}>
        <Hamburger size={26} direction="right" />
      </div>
      <div className={styles.nav_list}>
        <nav>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index} className={styles.nav_item}>
                  <ActiveLink
                    activeClassName={styles.header_navlink_active}
                    href={link.path}
                  >
                    <a className={styles.headernavlink}>{link.name}</a>
                  </ActiveLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
