"use client";
import React, { useContext } from "react";
import style from "../css/topQuality.module.css";
import styles from "../css/tasteView.module.css";

import { userContext } from "@/app/context/context";

const TopQuality = () => {
  let user = useContext(userContext);
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
      <div className={style["for-top-gap"]}></div>

      <div className={style["top-section-img"]}>
        <img
          src="/images/home/border.png"
          className={styles["center-design-img-wrapper-img"]}
        />
      </div>

      <div className={style["center-section-wrapper"]}>
        <div className={style["left-section-img-wrapper"]}>
          <img
            src="/images/home/Asset23.png"
            className={style["left-section-img"]}
          />
        </div>
        <div className={style["right-section-wrapper"]}>
          <h2 className={style["heading"]}>
            {user.isEnglish
              ? " OUR TOP-QUALITY INDIAN DISHES AND EXCELLENT SERVICE ARE UNMATCHED. EXPERIENCE THE Best Indian cuisine in Landshut"
              : "UNSERE ERSTKLASSIGEN INDISCHEN GERICHTE UND UNSER HERVORRAGENDER SERVICE SIND UNÜBERTROFFEN. ERLEBEN SIE DIE BESTE INDISCHE KÜCHE IM RAUM LANDSHUT"}
          </h2>
          <div>
            <p className={style["para"]}>
              {user.isEnglish
                ? "Experience the finest Indian cuisine at Maharaja Restaurant, the best Indian restaurant in Landshut. Our team of chefs, experts in Indian rustic cooking, has been specially chosen to bring you the finest culinary experience. Taste dishes cooked in traditional clay ovens, preserving their flavors and nutrients."
                : "Erleben Sie die feinste indische Küche im Maharaja Restaurant, dem besten indischen Restaurant im Raum Landshut. Unser Team von Köchen, Experten in der traditionellen indischen Küche, wurde speziell ausgewählt, um Ihnen das beste kulinarische Erlebnis zu bieten. Kosten Sie Gerichte, die in traditionellen Lehmöfen zubereitet werden und somit ihren Geschmack und ihre Nährstoffe bewahren."}
            </p>
            <p className={style["para"]}>
              {user.isEnglish
                ? "Whether you're a meat lover or prefer vegan options, we have something for everyone. Our extensive vegan food in Adlkofen is packed with Indian spices like turmeric, ginger, and cinnamon, taking you on a flavorful journey through India."
                : "Ob Sie Fleischliebhaber sind oder vegane Optionen bevorzugen, wir haben für jeden etwas dabei. Unser umfangreiches veganes Angebot in Adlkofen ist voller indischer Gewürze wie Kurkuma, Ingwer und Zimt, die Sie auf eine geschmackvolle Reise durch Indien mitnehmen."}
            </p>
            <p className={style["para"]}>
              {user.isEnglish
                ? "Experience the Best Indian cuisine in Adlkofen at Maharaja Restaurant, where every dish is made with love and authenticity"
                : "Erleben Sie die beste indische Küche in Adlkofen im Maharaja Restaurant, wo jedes Gericht mit Liebe und Authentizität zubereitet wird."}
            </p>
          </div>
          <div className={style["reserve-table-div"]}>
            <button className={style["reserve-table"]}>RESERVE TABLE</button>
          </div>
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
