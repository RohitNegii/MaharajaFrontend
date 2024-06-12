import React from "react";

import styles from "../css/twoImageBox.module.css";

const TwoImageBox = () => {
  return (
    <>
      <section className={styles["two-image-section"]}>
        <div className={styles["upper-down-img-wrapper"]}>
          <img
            src="/images/home/Asset17.png"
            alt=""
            className={styles["upper-down-img-wrapper-img"]}
          />
        </div>
        <div className={styles["center-section-wrapper"]}>
          <div className={styles["first-image-wrapper"]}>
            <img
              src="https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user"
              className={styles["first-image-wrapper-img"]}
            />
          </div>
          <div className={styles["first-image-wrapper"]}>
            <img
              src="https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user"
              className={styles["first-image-wrapper-img"]}
            />
          </div>
        </div>

        <div className={styles["upper-down-img-wrapper"]}>
          <img
            src="/images/home/Asset17.png"
            alt=""
            className={styles["upper-down-img-wrapper-img"]}
          />
        </div>
      </section>
    </>
  );
};

export default TwoImageBox;
