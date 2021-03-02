import Link from "next/link";
import styles from "./button.module.scss";

export default function Button(props) {
  return (
    <div className={styles.button}>
      <Link href={props.href}>
        <a className={styles.button__main}>{props.title}</a>
      </Link>
    </div>
  );
}
