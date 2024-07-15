import React from 'react'

import styles from "../css/menuBanner.module.css"

const MenuBanner = () => {
  return (
    <section className={styles["menu-section"]}>
      <div className={`${styles["first-div"]} ${styles["img-div"]}`}>
        <img
          src="/images/menu/14.png"
          className={styles["menu-baner-img"]}
          alt
        />
      </div>

      <div className={styles["center-div"]}>
        <h2 className={styles["small-heading"]}>DELICIOUS & AMAZING</h2>
        <div className={`${styles["img-after-h2"]} dimond-image-wrapper`}>
          <img src="/images/home/border.png" alt="dimond-img" />
        </div>
        <h1 className={styles["our-menu"]}> Our MENU </h1>
      </div>
      <div className={`${styles["first-div"]} ${styles["img-div"]}`}>
        <img
          src="/images/menu/15.png"
          className={styles["menu-baner-img"]}
          alt
        />
      </div>
    </section>
  );
}

export default MenuBanner