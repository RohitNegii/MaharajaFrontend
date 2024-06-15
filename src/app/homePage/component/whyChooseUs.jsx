"use client";
import React, { useContext } from "react";

import styles from "../css/whyChooseUs.module.css";

import { userContext } from "@/app/context/context";

const WhyChooseUs = () => {
  let user = useContext(userContext);
  const chooseJson = [
    {
      icon: "/images/Asset10.png",
      heading: user.isEnglish ? "QUALITY FOODS" : "QUALITÄTSNAHRUNG",
      paragraph: user.isEnglish
        ? "Enjoy authentic Indian cuisine in Landshut. From traditional dishes to modern favorites, we use fresh ingredients for delicious flavors."
        : "Genießen Sie authentische indische Küche im Raum Landshut. Von traditionellen Gerichten bis hin zu modernen Favoriten – wir verwenden frische Zutaten für köstliche Aromen.",
    },
    {
      icon: "/images/Asset11.png",
      heading: user.isEnglish ? "ORIGINAL RECIPES" : "ORIGINALREZEPTE",
      paragraph: user.isEnglish
        ? "Taste the best Indian food in Landshut! Our chefs create original dishes, blending traditional flavors with innovative twists."
        : "Kosten Sie das beste indische Essen im Raum Landshut! Unsere Köche kreieren originale Gerichte, die traditionelle Aromen mit innovativen Akzenten verbinden.",
    },
    {
      icon: "/images/Asset12.png",
      heading: user.isEnglish ? "TRAINED CHEFS" : "AUSGEBILDETE KÖCHE",
      paragraph: user.isEnglish
        ? "Our trained chefs bring you the best Indian cuisine in Landshut and Adlkofen. With expertise and passion, they made dishes that were authentic and full of flavor."
        : "Unsere ausgebildeten Köche bringen Ihnen die beste indische Küche in Landshut und Adlkofen. Mit Fachwissen und Leidenschaft bereiten sie Gerichte zu, die authentisch und geschmackvoll sind.",
    },
    {
      icon: "/images/Asset13.png",
      heading: user.isEnglish ? "FASTEST DELIVERY" : "SCHNELLSTE LIEFERUNG",
      paragraph: user.isEnglish
        ? "Get your food fast! This Indian restaurant in Landshut offers quick delivery, ensuring you receive your order promptly."
        : "Erhalten Sie Ihr Essen schnell! Unser indisches Restaurant im Raum Landshut bietet eine schnelle Lieferung und sorgt dafür, dass Sie Ihre Bestellung prompt erhalten.",
    },
  ];
  return (
    <>
      <section className={styles["why-choose-section"]}>
        <h2 className={styles["why-choose-us-heading"]}>WHY CHOOSE US?</h2>
        <div className={styles["img-after-choose"]}>
          <img src="/images/Asset9.png" alt="heyy" />
        </div>

        <p className={styles["sub-heading"]}>
          An Extraordinary Experience <br />
          For All
        </p>

        <div className={styles["four-box-wrapper"]}>
          {chooseJson.map((ele, i) => {
            return (
              <div className={styles["box-wrapper"]} key={i}>
                <div className={styles["four-box-icon"]}>
                  <img src={ele.icon} alt="" />
                </div>
                <div className={styles["sub-heading-wrapper"]}>
                  {ele.heading.split(" ").map((item, i) => {
                    return (
                      <span className={styles["four-box-sub-heading"]} key={i}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </div>
                <p className={styles["four-box-paragraph"]}>{ele.paragraph}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
