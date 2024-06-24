import React from "react";
import styles from "../css/tasteView.module.css";

const TasteView = () => {
  const boxData = [
    {
      para: "The food tasted good, there was enough quantity for the money, unfortunately the dining room is a bit fresh, the oven was only heated up and people had been sitting there for a while.",
      name: "Gabriele Müller",
      desg: "PROFESSION",
    },
    {
      para: "We picked up food and ordered both a vegetarian and a chicken tika as well as a lamb dish and Nan with it. Unfortunately, our expectations were a bit too high due to the good reviews. Chicken and veggies were average at best and not particularly tasty. The lamb was boring with a very dominant cardamom taste. Restaurant looks like a cuvée of Indian and Bavarian with a large beer garden.",
      name: "Florian Keim",
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

        <div
          className={`${styles["after-heading-img-wrapper"]} dimond-image-wrapper`}
        >
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
        <div
          className={`${styles["center-design-img-wrapper"]} dimond-image-wrapper`}
        >
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
