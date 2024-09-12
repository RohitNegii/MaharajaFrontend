"use client";
import React, { useEffect, useState } from "react";

import styles from "../css/menu.module.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

import Link from "next/link";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

const Menu = () => {
  const menu = [
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
    { name: "Special Combo", type: "special combo" },
  ];

  const [allCategory, setAllCategory] = useState([]);
  const [selectedType, setSelectedType] = useState("breakfast"); // Default type
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category
  const [dishs, setDishs] = useState({});

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchDish(selectedCategory); // Fetch dishes whenever selectedCategory or selectedType changes
    }
  }, [selectedCategory, selectedType]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/categories`);
      setAllCategory(response.data.data);
      setSelectedCategory(response.data.data[0]._id); // Set initial category
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const fetchDish = async (categoryId) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/allDishes`, {
        params: { categoryId: categoryId, type: selectedType },
      });
      setDishs(response.data);
    } catch (error) {
      console.error("Error fetching dishes", error);
    }
  };

  const handleMenuClick = (type) => {
    setSelectedType(type);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className={styles["menu-section"]}>
      {/* Decorative Images */}
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

      {/* Main Section */}
      <div className={styles["main-section-wrapper"]}>
        <div className={styles["category-filter-wrapper"]}>
          <div
            className={`${styles["category-wrapper"]} ${styles["option-wrapper"]}`}
          >
            <select
              className={`${styles["category-input"]} ${styles["category-input-select"]}`}
              onChange={handleCategoryChange} // Handle category change
              value={selectedCategory}
            >
              <option selected disabled>
                FILTER: SORT BY
              </option>
              {allCategory.map((ele) => {
                return (
                  <option key={ele._id} value={ele._id}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className={styles["category-wrapper-line-text"]}>
          <div className={styles["transparent-line"]}></div>

          <div className={styles["category-main-scroller"]}>
            {menu.map((ele, i) => {
              return (
                <div className={styles["one-menu-wrapper"]} key={i}>
                  <div className={styles["icon-wrapper"]}>
                    <img
                      src="/images/home/Asset16.png"
                      className={styles["three-squre-box-wrapper-img"]}
                    />
                  </div>

                  <button
                    className={styles["menu-name"]}
                    onClick={() => handleMenuClick(ele.type)} // Handle menu type click
                  >
                    {ele.name}
                  </button>
                </div>
              );
            })}
          </div>

          <div className={styles["transparent-line"]}></div>

          {Object.keys(dishs).length !== 0 && (
            <div className={styles["one-category-full-details"]}>
              <div className={styles["img-wrapper"]}>
                <img
                  src={`${imageBaseUrl}/${dishs.category.image}`}
                  alt="recipe img"
                />
              </div>

              <div className={styles["bottom-section-wrapper"]}>
                <div className={styles["dish-name-discrepton"]}>
                  <div className={styles["etan-icon-wrapper"]}>
                    <h3 className={styles["enten"]}>Enten</h3>
                    <div className={styles["enten-logo"]}>
                      <img
                        src={`${imageBaseUrl}/${dishs.category.logo}`}
                        alt="dish logo"
                      />
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
                  {dishs.dishes.map((ele, index) => {
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
                            </p>
                            <p className={styles["dish-brief"]}>
                              {ele.description}
                            </p>
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
          )}
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
