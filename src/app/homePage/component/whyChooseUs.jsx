import React from "react";

import styles from "../css/whyChooseUs.module.css";

const WhyChooseUs = () => {
  const chooseJson = [
    {
      icon: "/images/Asset10.png",
      heading: "Quality Food",
      paragraph:
        "Enjoy authentic Indian cuisine in Adlkofen.From traditional dishes to modern favorites, we use fresh ingredients for delicious flavors.",
    },
    {
      icon: "/images/Asset11.png",
      heading: "Original Reciepe",
      paragraph:
        "Taste the best Indian food in Adlkofen! Our chefs create original d i s h e s , b l e n d i n g traditional flavors with innovative twists.",
    },
    {
      icon: "/images/Asset12.png",
      heading: "Trained Chef",
      paragraph:
        "Enjoy authentic Indian cuisine in Adlkofen. From traditional dishes to modern favorites, we use fresh ingredients for delicious flavors.",
    },
    {
      icon: "/images/Asset13.png",
      heading: "Fast Delivery",
      paragraph:
        "Get your food fast! This Indian restaurant in Adlkofen offers quick delivery, ensuring you r e c e i v e your orde r promptly.",
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
          {chooseJson.map((ele) => {
            return (
              <div className={styles["box-wrapper"]}>
                <div className={styles["four-box-icon"]}>
                  <img src={ele.icon} alt="" />
                </div>
                <div className={styles["sub-heading-wrapper"]}>
                  {ele.heading.split(" ").map((item) => {
                    return (
                      <span className={styles["four-box-sub-heading"]}>
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
