"use client";
import React, { useContext } from "react";

import styles from "../css/timing.module.css";
import { userContext } from "@/app/context/context";

const Timing = () => {
  let user = useContext(userContext);
  return (
    <>
      <section className={styles["timing-section"]}>
        <div className={styles["left-top-img-wrapper"]}>
          <img
            src="/images/home/17.png"
            className={styles["left-top-img-wrapper-img"]}
          />
        </div>
        <div className={styles["right-bottom-img-wrapper"]}>
          <img
            src="/images/home/20.png"
            className={styles["left-top-img-wrapper-img"]}
          />
        </div>
        {/* <div className={styles["timing-background-img-wrapper"]}> */}
        {/* <img
            src="/images/home/asset24.png"
            alt=""
            className={styles["timing-background-img"]}
          /> */}
        {/* </div> */}
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
                {user.isEnglish
                  ? " Savor the flavors at Maharaja, the best Indian restaurant in Adlkofen. Enjoy authentic and delicious Indian dishes in a warm and exotic atmosphere. Our excellent service and delightful cuisine will make your dining experience unforgettable."
                  : "Genießen Sie die Aromen im Maharaja, das indische Restaurant in Adlkofen. Freuen Sie sich auf authentische und köstliche indische Gerichte in einer warmen und exotischen Atmosphäre. Unser ausgezeichneter Service und die delikate Küche werden Ihr kulinarisches Erlebnis unvergesslich machen."}
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
