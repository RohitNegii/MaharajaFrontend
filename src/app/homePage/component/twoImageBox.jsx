"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../css/twoImageBox.module.css";

const TwoImageBox = () => {
  const images = [
    "https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user",
    "https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user",
    "https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user",
    "https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user",
    "https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user",
    "https://img.freepik.com/free-photo/hand-pointing-paper-near-mexican-food_23-2147740714.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717718400&semt=ais_user",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if(window){

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index * (isMobile ? 1 : 2));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const cardWidth = teamRef.current.querySelector(
        `.${styles["first-image-wrapper"]}`
      ).offsetWidth;
      const containerWidth = teamRef.current.clientWidth;
      const maxScrollLeft = teamRef.current.scrollWidth - containerWidth;

      if (
        teamRef.current.scrollLeft + (isMobile ? cardWidth : 2 * cardWidth) >=
        maxScrollLeft
      ) {
        teamRef.current.scrollLeft = 0;
        setCurrentIndex(0);
      } else {
        teamRef.current.scrollLeft += isMobile ? cardWidth : 2 * cardWidth;
        setCurrentIndex((prev) => (prev + (isMobile ? 1 : 2)) % images.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, isMobile]);

  return (
    <>
      <section className={styles["two-image-section"]}>
        <div
          className={`${styles["upper-down-img-wrapper"]} dimond-image-wrapper`}
        >
          <img
            src="/images/home/Asset17.png"
            alt=""
            className={styles["upper-down-img-wrapper-img"]}
          />
        </div>
        <div className={styles["center-section-wrapper"]} ref={teamRef}>
          {images.map((image, index) => (
            <div key={index} className={styles["first-image-wrapper"]}>
              <img src={image} className={styles["first-image-wrapper-img"]} />
            </div>
          ))}
        </div>
        <div className={styles["three-squre-box-wrapper"]}>
          {[0, 1, 2].map((i) => (
            <img
              key={i}
              src="/images/home/Asset16.png"
              className={`${styles["three-squre-box-wrapper-img"]} ${
                Math.floor(currentIndex / (isMobile ? 1 : 2)) === i &&
                styles["active-three-squre-box-wrapper-img"]
              }`}
              onClick={() => handleIndicatorClick(i)}
            />
          ))}
        </div>
        <div
          className={`${styles["upper-down-img-wrapper"]} dimond-image-wrapper`}
        >
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
