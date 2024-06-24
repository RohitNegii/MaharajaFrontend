import React from "react";
import styles from "../css/tasteView.module.css";
import splendorStyle from "../css/splendorOf.module.css";

import collage from "../../../../public/images/home/collage.jpg";
// . /images/home/collage.jpg";

import Image from "next/image";

function SplendorOf() {
  return (
    <div>
      <section className={splendorStyle["main-section"]}>
        <div className={`${styles["top-left-img-wrapper"]} `}>
          <img
            src="/images/home/Asset5.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={styles["top-right-img-wrapper"]}>
          <img
            src="/images/home/Asset4.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={styles["bottom-left-img-wrapper"]}>
          <img
            src="/images/home/Asset2.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={styles["bottom-right-img-wrapper"]}>
          <img
            src="/images/home/Asset3.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>

        <div
          className={`${styles["center-design-img-wrapper"]} dimond-image-wrapper`}
        >
          <img
            src="/images/home/border.png"
            className={styles["center-design-img-wrapper-img"]}
          />
        </div>
        <h2 className={splendorStyle["heading"]}>
          Step Inside The Splendor Of <br /> MAHARAJA
        </h2>
        <div
          className={`${styles["after-heading-img-wrapper"]} dimond-image-wrapper`}
          style={{ marginBottom: "0" }}
        >
          <img
            src="/images/home/border.png"
            className={styles["after-heading-img"]}
          />
        </div>

        <div className={splendorStyle["image-container"]}>
          <Image
            src={collage}
            style={{ width: "100%", objectFit: "contain", height: "100%" }}
          />
        </div>
        <div
          className={`${styles["center-design-img-wrapper"]} dimond-image-wrapper`}
        >
          <img
            src="/images/home/border.png"
            className={styles["center-design-img-wrapper-img"]}
          />
        </div>
      </section>
    </div>
  );
}

export default SplendorOf;
