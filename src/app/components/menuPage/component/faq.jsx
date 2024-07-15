"use client";
import React, { useState } from "react";

import styles from "../css/faq.module.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      heading: "How to Order Food Easily?",
      isOpen: true,
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter  Wirt) und genießen Sie authentische, köstliche Gerichte aus   Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
    },
    {
      heading: "How to Order Food Easily?",
      isOpen: false,
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter  Wirt) und genießen Sie authentische, köstliche Gerichte aus   Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
    },
    {
      heading: "How to Order Food Easily?",
      isOpen: false,
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter  Wirt) und genießen Sie authentische, köstliche Gerichte aus   Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
    },
    {
      heading: "How to Order Food Easily?",
      isOpen: false,
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter  Wirt) und genießen Sie authentische, köstliche Gerichte aus   Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
    },
    {
      heading: "How to Order Food Easily?",
      isOpen: false,
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter  Wirt) und genießen Sie authentische, köstliche Gerichte aus   Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
    },
  ]);

  const changeFaq = (ind) => {
    setFaq((prv) => {
      return prv.map((ele, i) => {
        if (i == ind) {
          return { ...ele, isOpen: !ele.isOpen };
        } else {
          return { ...ele, isOpen: false };
        }
      });
    });
  };
  return (
    <>
      <section className={styles["faq-section"]}>
        <h2 className={styles["asked-question"]}>Asking Questions</h2>
        <div className={`${styles["img-after-choose"]} dimond-image-wrapper`}>
          <img src="/images/Asset9.png" alt="dimond-img" />
        </div>

        <div className={styles["faq-main-wrapper"]}>
          {faq.map((ele, i) => {
            return (
              <div className={styles["one-faq"]} key={i}>
                <div className={styles["top-row"]}>
                  <h3 className={styles["faq-heading"]}>{ele.heading}</h3>
                  <button
                    onClick={() => changeFaq(i)}
                    className={styles["arrow-btn"]}
                  >
                    {ele.isOpen ? (
                      <KeyboardArrowDownIcon
                        className={styles["arrow-btn-icon"]}
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        className={styles["arrow-btn-icon"]}
                      />
                    )}
                  </button>
                </div>
                {ele.isOpen && (
                  <>
                    <div className={styles["transparent-line"]}></div>
                    <p className={styles["faq-para"]}>{ele.para}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className={`${styles["img-after-choose"]} dimond-image-wrapper`}>
          <img src="/images/Asset9.png" alt="dimond" />
        </div>
      </section>
    </>
  );
};

export default Faq;
