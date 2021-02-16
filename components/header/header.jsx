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

const Links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Work",
    url: "/work",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
].map((link, index) => {
  return (
    <li key={index} className={styles.headernavli}>
      <ActiveLink activeClassName="active" href={link.url}>
        <a className={styles.headernavlink}>{link.name}</a>
      </ActiveLink>
    </li>
  );
});

export default function Header() {
  return (
    <div className={styles.headerwrapper}>
      <div className="header-wrapper-logo">
        <h1 className={styles.logotitle}>
          <a href="/" className={styles.logotitlelink}>
            mihail-antonov.dev
          </a>
        </h1>
      </div>
      <div className={styles.headerwrapperbtn}>
        <Hamburger size={26} direction="right" />
      </div>
      <div className={styles.headerwrappernav}>
        <nav>
          <ul>{Links}</ul>
        </nav>
      </div>
    </div>
  );
}
