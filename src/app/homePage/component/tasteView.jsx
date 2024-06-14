import React from "react";
import styles from "../css/tasteView.module.css";

const TasteView = () => {
  const boxData = [
    {
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter Wirt) und genießen Sie authentische, köstliche Gerichte aus Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
      name: "John Doe",
      desg: "PROFESSION",
    },
    {
      para: "Entdecken Sie das indische Restaurant Maharaja in Adlkofen (Alter Wirt) und genießen Sie authentische, köstliche Gerichte aus Indien. Lassen Sie sich von der exotischen Atmosphäre und dem herzlichen Service verzaubern!",
      name: "John Doe",
      desg: "PROFESSION",
    },
  ];
  return (
    <>
      <section className={styles["taste-view-section"]}>
        {/* <img
          src="/images/home/Asset1.png"
          className={styles["taste-view-section-img"]}
        /> */}

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

        <h2 className={styles["taste-view-heading"]}>Your Taste Views</h2>

        <div className={styles["after-heading-img-wrapper"]}>
          <img
            src="/images/home/border.png"
            className={styles["after-heading-img"]}
          />
        </div>

        <div className={styles["taste-view-box-design-wrapper"]}>
          <div className={styles["two-box-wrapper"]}>
            {boxData.map((ele, i) => {
              return (
                <div className={styles["box"]} key={i}>
                  <div className={styles["box-img-wrapper"]}>
                    <img
                      src="/images/home/asset27.png"
                      className={styles["box-img"]}
                    />
                  </div>
                  <div className={styles["text-name-wrapper"]}>
                    <div className={styles["top-img-wrapper"]}>
                      <img src="/images/home/Asset18.png" />
                    </div>
                    <p className={styles["box-para"]}>{ele.para}</p>
                    <div className={styles["name-deg-wrapper"]}>
                      <h3 className={styles["name"]}>{ele.name}</h3>
                      <p className={styles["desg"]}>{ele.desg}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles["three-squre-box-wrapper"]}>
            <img
              src="/images/home/Asset16.png"
              className={styles["three-squre-box-wrapper-img"]}
            />
            <img
              src="/images/home/Asset16.png"
              className={styles["three-squre-box-wrapper-img"]}
            />
            <img
              src="/images/home/Asset16.png"
              className={styles["three-squre-box-wrapper-img"]}
            />
          </div>
        </div>
        <div className={styles["center-design-img-wrapper"]}>
          <img
            src="/images/home/border.png"
            className={styles["center-design-img-wrapper-img"]}
          />
        </div>
      </section>
    </>
  );
};

export default TasteView;
