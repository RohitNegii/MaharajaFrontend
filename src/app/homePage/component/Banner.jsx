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

      <div
        className={`${styles["after-heading-img-wrapper"]} dimond-image-wrapper`}
      >
        {/* <Image src={design1} className={styles["after-heading-img"]} /> */}
        <img
          src="/images/home/border.png"
          className={styles["after-heading-img"]}
        />
      </div>

      <h1 className={styles["heading-h1"]}>
        {user.isEnglish
          ? "Enjoy The Best Indian Cuisine \nIn The Heart Of Landshut"
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
          : "Genießen Sie die beste indische \nKüche im Herzen von Landshut"
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
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
