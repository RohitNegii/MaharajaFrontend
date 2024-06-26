import React from "react";

import styles from "../css/menu.module.css";
import Link from "next/link";

const Menu = () => {
  const menu = [
    {
      name: "Breakfast",
    },
    {
      name: "Lunch",
    },
    {
      name: "Dinner",
    },
    {
      name: "Special Combo",
    },
  ];

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
      price: "€3,900",
    },
  ];
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
          <h3 className={styles["popular-picks-heading"]}> POPULAR PICKS</h3>
          <div
            className={`${styles["after-heading-img-wrapper"]} dimond-image-wrapper`}
          >
            <img
              src="/images/home/border.png"
              className={styles["after-heading-img"]}
            />
          </div>
          {/* <div className="background-transparent-color"> </div> */}

          <h2 className={styles["our-special-menu"]}> Our Special Menu</h2>
          <div className={styles["main-section-wrapper"]}>
          <div className={styles["transparent-line"]}></div>
            <div className={styles["menu-wrapper"]}>
              {menu.map((ele, i) => {
                return (
                  <div className={styles["one-menu-wrapper"]} key={i}>
                    <div className={styles["icon-wrapper"]}>
                      <img
                        src="/images/home/Asset16.png"
                        className={styles["three-squre-box-wrapper-img"]}
                      />
                    </div>
                    <span className={styles["menu-name"]}>{ele.name}</span>
                  </div>
                );
              })}
            </div>

            <div className={styles["transparent-line"]}></div>

            <div className={styles["two-section-divider"]}>
              <div
                className={`${styles["left-section"]} ${styles["left-border"]}`}
              >
                {menuDish
                  .slice(0, Math.ceil(menuDish.length / 2))
                  .map((ele, index) => {
                    return (
                      <div className={styles["one-combo-wrapper"]} key={index}>
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
                        <div className={styles["price-wrapper"]}>
                          {ele.price}
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className={styles["left-section"]}>
                {menuDish
                  .slice(Math.ceil(menuDish.length / 2), menuDish.length)
                  .map((ele, index) => {
                    return (
                      <div className={styles["one-combo-wrapper"]} key={index}>
                        <div className={styles["number-wrapper"]}>
                          {ele.number}
                        </div>
                        <div className={styles["name-paragraph-wrapper"]}>
                          <p className={styles["dish-name-number-wrapper"]}>
                            <span className={styles["dish-name"]}>
                              {ele.name}
                            </span>
                            <sup className={styles["sup-text"]}>{ele.sup}</sup>
                          </p>
                          <p className={styles["dish-brief"]}>{ele.brief}</p>
                        </div>
                        <div className={styles["price-wrapper"]}>
                          {ele.price}
                        </div>
                      </div>
                    );
                  })}
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
