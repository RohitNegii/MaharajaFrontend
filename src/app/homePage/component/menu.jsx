import React from "react";

import styles from "../css/menu.module.css";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <section className={styles["menu-section"]}>
        <h3 className={styles["popular-picks-heading"]}> POPULAR PICKS</h3>
        <h2 className={styles["our-special-menu"]}> Our Special Menu</h2>
        <div className={styles["transparent-line"]}></div>

        <div className={styles["view-full-menu-wrapper"]}>
          <div className={styles["background-img-wrapper"]}>
            <Link href="" className={styles["view-full-menu-link"]}>
              VIEW FULL MENU
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
