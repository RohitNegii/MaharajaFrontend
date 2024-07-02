"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../css/tasteView.module.css";

const TasteView = () => {
  const [imageInd, setImageInd] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const teamRef = useRef(null);

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
    // Repeat more items as needed
  ];

  // Handle window resize to toggle between mobile and desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (teamRef.current) {
        const cardWidth = teamRef.current.querySelector(
          `.${styles["box"]}`
        ).offsetWidth;
        const containerWidth = teamRef.current.clientWidth;
        const maxScrollLeft = teamRef.current.scrollWidth - containerWidth;

        const scrollAmount = isMobile ? cardWidth : 2 * cardWidth;

        if (teamRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
          teamRef.current.scrollLeft = 0;
          setImageInd(0);
        } else {
          teamRef.current.scrollLeft += scrollAmount;
          setImageInd((prev) => (prev + (isMobile ? 1 : 2)) % boxData.length);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [boxData.length, isMobile]);

  // Handle indicator click to scroll to specific item
  const handleIndicatorClick = (index) => {
    if (teamRef.current) {
      const cardWidth = teamRef.current.querySelector(
        `.${styles["box"]}`
      ).offsetWidth;
      const scrollAmount = index * (isMobile ? cardWidth : 2 * cardWidth);
      teamRef.current.scrollLeft = scrollAmount;
      setImageInd(index * (isMobile ? 1 : 2));
    }
  };

  return (
    <>
      <section className={styles["taste-view-section"]}>
        <div className={styles["top-left-img-wrapper"]}>
          <img
            src="/images/home/Asset5.png"
            className={styles["top-left-img-wrapper-img"]}
            alt="Top Left"
          />
        </div>
        <div className={styles["top-right-img-wrapper"]}>
          <img
            src="/images/home/Asset4.png"
            className={styles["top-left-img-wrapper-img"]}
            alt="Top Right"
          />
        </div>
        <div className={styles["bottom-left-img-wrapper"]}>
          <img
            src="/images/home/Asset2.png"
            className={styles["top-left-img-wrapper-img"]}
            alt="Bottom Left"
          />
        </div>
        <div className={styles["bottom-right-img-wrapper"]}>
          <img
            src="/images/home/Asset3.png"
            className={styles["top-left-img-wrapper-img"]}
            alt="Bottom Right"
          />
        </div>

        <h2 className={styles["taste-view-heading"]}>Your Taste Views</h2>

        <div
          className={`${styles["after-heading-img-wrapper"]} dimond-image-wrapper`}
        >
          <img
            src="/images/home/border.png"
            className={styles["after-heading-img"]}
            alt="Border"
          />
        </div>

        <div className={styles["taste-view-box-design-wrapper"]}>
          <div className={styles["two-box-wrapper"]} ref={teamRef}>
            {boxData.map((ele, i) => (
              <div className={styles["box"]} key={i}>
                <div className={styles["box-img-wrapper"]}>
                  <img
                    src="/images/home/asset27.png"
                    className={styles["box-img"]}
                    alt="Box Image"
                  />
                </div>
                <div className={styles["text-name-wrapper"]}>
                  <div className={styles["top-img-wrapper"]}>
                    <img src="/images/home/Asset18.png" alt="Top Icon" />
                  </div>
                  <p className={styles["box-para"]}>{ele.para}</p>
                  <div className={styles["name-deg-wrapper"]}>
                    <h3 className={styles["name"]}>{ele.name}</h3>
                    <p className={styles["desg"]}>{ele.desg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["three-squre-box-wrapper"]}>
            {boxData.slice(0, 3).map((_, i) => (
              <img
                key={i}
                src="/images/home/Asset16.png"
                className={`${styles["three-squre-box-wrapper-img"]} ${
                  Math.floor(imageInd / (isMobile ? 1 : 2)) === i &&
                  styles["active-three-squre-box-wrapper-img"]
                }`}
                onClick={() => handleIndicatorClick(i)}
                alt="Indicator"
              />
            ))}
          </div>
        </div>
        <div
          className={`${styles["center-design-img-wrapper"]} dimond-image-wrapper`}
        >
          <img
            src="/images/home/border.png"
            className={styles["center-design-img-wrapper-img"]}
            alt="Center Design"
          />
        </div>
      </section>
    </>
  );
};

export default TasteView;
