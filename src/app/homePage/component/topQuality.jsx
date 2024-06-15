import React from "react";
import style from "../css/topQuality.module.css";
import styles from "../css/tasteView.module.css";

const TopQuality = () => {
  return (
    <section className={style["top-quality-section"]}>
      <div className={styles["top-left-img-wrapper"]}>
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

      <div className={style["center-section-wrapper"]}>

        <div className={style["left-section-img-wrapper"]}>
            <img src="/images/home/"

        </div>
        <div className={style["right-section-wrapper"]}>

        </div>

      </div>

      <div className={styles["center-design-img-wrapper"]}>
        <img
          src="/images/home/border.png"
          className={styles["center-design-img-wrapper-img"]}
        />
      </div>
    </section>
  );
};

export default TopQuality;
