import styles from "./footer.module.css";

export default function Header() {
  return (
    <div className={styles.footerwrapper}>
      <div className="footer-wrapper-socials">
        <p>Socials Links here</p>
      </div>
      <div className="footer-wrapper-name">
        <p>hi@mihail-antonov.dev</p>
      </div>
    </div>
  );
}
