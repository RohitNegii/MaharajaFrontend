"use client";
import React, { useEffect, useState } from "react";

import styles from "../menuPage/css/menu.module.css";
const apiEndpoint = "http://localhost:4000/api";




import axios from "axios";
const DetailMenu = () => {


  const [dishData, setDishData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {
     const route = window.location.href.split("/");
     
  const fetchDish = async () => {
    try {
      const dishDataa = await axios(
        `${apiEndpoint}/dishes/${route[route.length - 1]}`
      );
      setDishData(dishDataa.data.data);
    } catch (err) {
      setError("Failed to fetch the dish.");
    }
  };
  
    if (route) {
      fetchDish();
    }
    
  }, []);
  return (
    <>
      {console.log(dishData, "dsf")}
      <section
        className={styles["menu-section"]}
        style={{ background: "var(--primaryColor" }}
      >
        <div className={`${styles["top-left-img-wrapper"]} `}>
          <img
            src="/images/home/Asset5.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={`${styles["top-right-img-wrapper"]} `}>
          <img
            src="/images/home/Asset4.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={`${styles["bottom-left-img-wrapper"]} `}>
          <img
            src="/images/home/Asset2.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={`${styles["bottom-right-img-wrapper"]} `}>
          <img
            src="/images/home/Asset3.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        {/* <div className={`${styles["top-section-img"]} dimond-image-wrapper`}>
          <img
            src="/images/home/border.png"
            className={styles["center-design-img-wrapper-img"]}
          />
        </div> */}

        {/* gdfgd */}

        <div className={styles.container}>
          <div className={styles.menu}>
            <div className={styles.dishPrice} style={{ alignItems: "center" }}>
              <h1 className={styles.header}>
                {dishData.number}.{" "}
                <span className={styles.pizza}>{dishData.name}</span>
              </h1>
              {/* <div className={styles.priceContainer}> */}
              <span className={styles.price}>€{dishData.price}</span>

              {/* </div> */}
            </div>

            <div className={styles.dishPrice}>
              <p className={styles.dishDescription}>{dishData.description}</p>

              <div className={styles.quantityContainer}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.quantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>

            {dishData.showDrinks&&

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Size</h2>
              <button className={styles.sizeButton}>Small</button>
              <button className={styles.sizeButton}>Small</button>
              <button className={styles.sizeButton}>Small</button>
            </div>}

                        {dishData.showToopins&&

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Add ons</h2>
              <div className={`${styles.addOns} sm`}>
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <label key={index} className={styles.checkboxLabel}>
                      <input type="checkbox" className={styles.checkbox} />{" "}
                      Tomato Sauce
                    </label>
                  ))}
              </div>
            </div>}
          </div>
        </div>

        {/* fgdfg */}

        {/* <div
          className={`${styles["top-section-img"]} ${styles["bottom-section-img"]} dimond-image-wrapper`}
        >
          <img
            src="/images/home/border.png"
            className={styles["center-design-img-wrapper-img"]}
          />
        </div> */}
      </section>
    </>
  );
};

export default DetailMenu;
