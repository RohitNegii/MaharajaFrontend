import React from "react";
import styles from "../css/Banner.module.css";
import Image from "next/image";

import design1 from "../../../../public/images/home/border.png";
import { Button } from "@mui/material";
function Banner() {
  return (
    <div className={styles["main-container"]}>
      <p className={styles["auth-heading"]}>AUTHENTIC & HYGIENIC</p>

      <div className={styles["after-heading-img-wrapper"]}>
        {/* <Image src={design1} className={styles["after-heading-img"]} /> */}
        <img
          src="/images/home/border.png"
          className={styles["after-heading-img"]}
        />
      </div>

      <h1 className={styles["heading-h1"]}>
        Enjoy The Best Indian Cuisine In The Heart Of Adlkofen
      </h1>
      <p className={styles["heading-last"]}>
        Enjoy a delicious meal with your loved ones
      </p>
      <Button variant="outlined" className={styles["view-menu-btn"]}>
        VIEW MENU
      </Button>
    </div>
  );
}

export default Banner;
