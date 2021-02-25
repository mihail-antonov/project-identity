import Image from "next/image";

import styles from "./cover.module.scss";
import layout from "../layout/layout.module.scss";

export default function Cover(props) {
  return (
    <div className={styles.cover}>
      <div className={layout.container}>
        <div className={styles.wrapper}>
          <div className={styles.image_box}>
            <Image
              src={props.coverImage}
              alt={props.coverAlt}
              className={styles.image_box_img}
              width="480px"
              height="480px"
            />
          </div>
          <div className={styles.text_box}>
            <p className={styles.text_box_caption}>{props.coverCaption}</p>
            <h2 className={styles.text_box_title}>{props.coverTitle}</h2>
            <p className={styles.text_box_paragraph}>{props.coverParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
