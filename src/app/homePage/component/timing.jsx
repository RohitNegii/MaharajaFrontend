import React from "react";

import styles from "../css/timing.module.css";

const Timing = () => {
  return (
    <>
      <section className={styles["timing-section"]}>
        <div className={styles["timing-background-img-wrapper"]}>
          <img
            src="/images/home/asset24.png"
            alt=""
            className={styles["timing-background-img"]}
          />
        </div>
        <div className={styles["content-img-wrapper"]}>
          <div className={styles["top-bottom-img-wrapper"]}>
            <img
              src="/images/home/border.png"
              alt=""
              className={styles["top-bottom-img"]}
            />
          </div>
          <div className={styles["center-section-wrapper"]}>
            <div className={styles["left-content-wrapper"]}>
              <p className={styles["para"]}>
                Entdecken Sie das indische Restaurant Maharaja in Adlkofen
                (Alter Wirt) und genießen Sie authentische, köstliche Gerichte
                aus Indien. Lassen Sie sich von der exotischen Atmosphäre und
                dem herzlichen Service verzaubern!
              </p>
              <h2 className={styles["heading"]}>Öffnungszeiten</h2>

              <div className={styles["timing-wrapper"]}>
                <div className={styles["timing-div"]}>
                  Mo-Fr <span className={styles["timing-color"]}>17:00</span>{" "}
                  bis <span className={styles["timing-color"]}>22:30</span>
                </div>
                <div className={styles["timing-div"]}>
                  Sam <span className={styles["timing-color"]}>16:00</span> bis{" "}
                  <span className={styles["timing-color"]}>22:30</span>
                </div>
                <div className={styles["timing-div"]}>
                  Sonn und Feiertage{" "}
                  <span className={styles["timing-color"]}>11:00</span> bis{" "}
                  <span className={styles["timing-color"]}>14:00</span>
                </div>
                <div className={styles["timing-div"]}>
                  und <span className={styles["timing-color"]}>16:00</span> bis{" "}
                  <span className={styles["timing-color"]}>22:30</span>
                </div>
              </div>
            </div>

            <div className={styles["right-section-img-wrapper"]}>
              <img
                src="/images/home/Asset25.png"
                alt=""
                className={styles["right-section-img"]}
              />
            </div>
          </div>
          <div className={styles["top-bottom-img-wrapper"]}>
            <img
              src="/images/home/border.png"
              alt=""
              className={styles["top-bottom-img"]}
            />
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Timing;
