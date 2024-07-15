"use client";
import React, { useState } from "react";

import styles from "../css/menu.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const Menu = () => {
  const [category, setCategory] = useState([
    {
      category: "Breakfast",
    },
    {
      category: "Lunch",
    },

    {
      category: "Dinner",
    },
    {
      category: "Special Combo",
    },
    {
      category: "Breakfast",
    },
    {
      category: "Lunch",
    },

    {
      category: "Dinner",
    },
    {
      category: "Special Combo",
    },
  ]);

   const menuDish = [
     {
       number: 110,
       name: "Papad",
       sup: "1.3",
       brief: " würzige Big Chips aus Hülsenfrüchtemehl (2 Stück)",
       price: "€3,90",
     },
     {
       number: 110,
       name: "Papad",
       sup: "1.3",
       brief: " würzige Big Chips aus Hülsenfrüchtemehl (2 Stück)",
       price: "€3,90",
     },
     {
       number: 110,
       name: "Papad",
       sup: "1.3",
       brief: " würzige Big Chips aus Hülsenfrüchtemehl (2 Stück)",
       price: "€3,90",
     },
     {
       number: 110,
       name: "Papad",
       sup: "1.3",
       brief: " würzige Big Chips aus Hülsenfrüchtemehl (2 Stück)",
       price: "€3,90",
     },
    
   
   ];

  return (
    <section className={styles["menu-section"]}>
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

      <div className={`${styles["top-section-img"]} dimond-image-wrapper`}>
        <img
          src="/images/home/border.png"
          className={styles["center-design-img-wrapper-img"]}
        />
      </div>

      {/* main section start hear */}
      <div className={styles["main-section-wrapper"]}>
        <div className={styles["category-filter-wrapper"]}>
          <div className={styles["category-wrapper"]}>
            <input
              type="text"
              className={styles["category-input"]}
              placeholder="CATEGORY"
            ></input>
            <div className={styles["search-icon"]}>
              <SearchIcon className={styles["search-icon-icon"]} />
            </div>
          </div>

          <div
            className={`${styles["category-wrapper"]} ${styles["option-wrapper"]}`}
          >
            <select
              className={`${styles["category-input"]} ${styles["category-input-select"]}`}
            >
              <option selected disabled>
                FILTER: SORT BY
              </option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
        </div>

        <div className={styles["category-wrapper-line-text"]}>
          <div className={styles["transparent-line"]}></div>

          <div className={styles["category-main-scroller"]}>
            {category.map((ele, i) => {
              return (
                <>
                  <div className={styles["one-menu-wrapper"]} key={i}>
                    <button className={styles["menu-name"]}>
                      {ele.category}
                    </button>
                    <div className={styles["icon-wrapper"]}>
                      <img
                        src="/images/home/Asset16.png"
                        className={styles["three-squre-box-wrapper-img"]}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles["transparent-line"]}></div>

          <div className={styles["one-category-full-details"]}>
            <div className={styles["img-wrapper"]}>
              <img
                src="data:image/jpeg;base64,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"
                alt="recipe img"
              />
            </div>

            <div className={styles["bottom-section-wrapper"]}>
              <div className={styles["dish-name-discrepton"]}>
                <div className={styles["etan-icon-wrapper"]}>
                  <h3 className={styles["enten"]}>Enten</h3>
                  <div className={styles["enten-logo"]}>
                    <img src="/images/menu/Dishicon.png" alt="dish logo" />
                  </div>
                </div>
                <p className={styles["dish-para"]}>
                  Jedes Gericht wird mit Basmatireis serviert
                </p>
                <div className={styles["heading-bottom-img-wrapper"]}>
                  <img
                    src="/images/home/Asset6.png"
                    className={styles["heading-bottom-img-wrapper-img"]}
                  />
                </div>
              </div>

              <div className={styles["menu-center-section"]}>
                {menuDish.map((ele, index) => {
                  return (
                    <div className={styles["one-combo-wrapper"]} key={index}>
                      <div className={styles["left-section"]}>
                        <div className={styles["number-wrapper"]}>
                          {ele.number}
                        </div>
                        <div className={styles["name-paragraph-wrapper"]}>
                          <p className={styles["dish-name-number-wrapper"]}>
                            <span className={styles["dish-name"]}>
                              {ele.name}
                            </span>
                            <span className={styles["sup-text"]}>
                              {ele.sup}
                            </span>
                          </p>
                          <p className={styles["dish-brief"]}>{ele.brief}</p>
                        </div>
                      </div>
                      <div className={styles["right-section"]}>
                        <div className={styles["price-wrapper"]}>
                          {ele.price}
                        </div>
                        <button className={styles["add-to-cart"]}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles["view-full-menu-wrapper"]}>
                <div className={styles["background-img-wrapper"]}>
                  <Link href="" className={styles["view-full-menu-link"]}>
                    VIEW FULL MENU
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles["top-section-img"]} ${styles["bottom-section-img"]} dimond-image-wrapper`}
      >
        <img
          src="/images/home/border.png"
          className={styles["center-design-img-wrapper-img"]}
        />
      </div>
    </section>
  );
};

export default Menu;
