"use client";
import React, { useContext } from "react";
import styles from "../css/Banner.module.css";
import Image from "next/image";

import design1 from "../../../../public/images/home/border.png";
import { Button } from "@mui/material";

import { userContext } from "@/app/context/context";
function Banner() {
  let user = useContext(userContext);
  return (
    <div className={styles["main-container"]}>
      <p className={styles["auth-heading"]}>
        {user.isEnglish ? "Authentic & Hygienic" : "Authentisch & Hygienisch"}
      </p>

      <div className={styles["after-heading-img-wrapper"]}>
        {/* <Image src={design1} className={styles["after-heading-img"]} /> */}
        <img
          src="/images/home/border.png"
          className={styles["after-heading-img"]}
        />
      </div>

      <h1 className={styles["heading-h1"]}>
        {user.isEnglish
          ? "Enjoy The Best Indian Cuisine In The Heart Of Landshut"
          : "Genießen Sie die beste indische Küche im Herzen von Landshut"}
      </h1>
      <p className={styles["heading-last"]}>
        {user.isEnglish
          ? "Enjoy a delicious meal with your loved ones"
          : "Genießen Sie eine köstliche Mahlzeit mit Ihren Liebsten Speisekarte ansehen"}
      </p>
      <Button variant="outlined" className={styles["view-menu-btn"]}>
        VIEW MENU
      </Button>
    </div>
  );
}

export default Banner;
