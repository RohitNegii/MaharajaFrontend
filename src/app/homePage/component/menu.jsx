"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/menu.module.css";
import Link from "next/link";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("breakfast"); // Default type

  const menu = [
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
    { name: "Special Combo", type: "special combo" },
  ];

  useEffect(() => {
    // Fetch dishes by selected type and show them on the home page
    const fetchDishes = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/getDishByShowDishHomePage`,
          {
            params: { type: selectedType },
          }
        );
        console.log(response);
        setDishes(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDishes();
  }, [selectedType]); // Trigger fetch when selectedType changes

  const handleMenuClick = (type) => {
    setSelectedType(type);
    setLoading(true); // Start loading when a new type is selected
  };

  const renderDishes = (dishesToRender) => {
    console.log(dishesToRender, "dishesToRender");
    return dishesToRender.map((ele, index) => (
      <div className={styles["one-combo-wrapper"]} key={index}>
        <div className={styles["number-wrapper"]}>{ele.number}</div>
        <div className={styles["name-paragraph-wrapper"]}>
          <p className={styles["dish-name-number-wrapper"]}>
            <span className={styles["dish-name"]}>{ele.name}</span>
            {/* <sup className={styles["sup-text"]}>{ele.sup}</sup> */}
          </p>
          <p className={styles["dish-brief"]}>{ele.description}</p>
        </div>
        <div className={styles["price-wrapper"]}>{ele.price}</div>
      </div>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const halfLength = Math.ceil(dishes.length / 2);
  const firstHalfDishes = dishes.slice(0, halfLength);
  const secondHalfDishes = dishes.slice(halfLength);

  return (
    <>
      <section className={styles["menu-section"]}>
        <img src="/images/home/16.png" className={styles["top-right-img"]} />
        <div className={styles["background-img"]}>
          <img
            src="/images/home/1.png"
            className={styles["background-img-img"]}
          />
        </div>

        <div className={styles["increasing-z-index"]}>
          <h3 className={styles["popular-picks-heading"]}>POPULAR PICKS</h3>
          <div
            className={`${styles["after-heading-img-wrapper"]} dimond-image-wrapper`}
          >
            <img
              src="/images/home/border.png"
              className={styles["after-heading-img"]}
            />
          </div>
          <h2 className={styles["our-special-menu"]}>Our Special Menu</h2>
          <div className={styles["main-section-wrapper"]}>
            <div className={styles["transparent-line"]}></div>
            <div className={styles["menu-wrapper"]}>
              {menu.map((ele) => (
                <div
                  className={styles["one-menu-wrapper"]}
                  key={ele.type}
                  onClick={() => handleMenuClick(ele.type)}
                >
                  <div className={styles["icon-wrapper"]}>
                    <img
                      src="/images/home/Asset16.png"
                      className={styles["three-squre-box-wrapper-img"]}
                    />
                  </div>
                  <span className={styles["menu-name"]}>{ele.name}</span>
                </div>
              ))}
            </div>

            <div className={styles["transparent-line"]}></div>

            <div className={styles["two-section-divider"]}>
              <div
                className={`${styles["left-section"]} ${styles["left-border"]}`}
              >
                {renderDishes(firstHalfDishes)}
              </div>
              <div className={styles["left-section"]}>
                {renderDishes(secondHalfDishes)}
              </div>
            </div>
          </div>
          <div className={styles["view-full-menu-wrapper"]}>
            <div className={styles["background-img-wrapper"]}>
              <Link href="" className={styles["view-full-menu-link"]}>
                VIEW FULL MENU
              </Link>
            </div>
          </div>
        </div>
        <img src="/images/home/16.png" className={styles["bottom-right-img"]} />
      </section>
    </>
  );
};

export default Menu;
