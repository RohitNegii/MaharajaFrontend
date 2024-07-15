import React from "react";
import styles from "../css/reservation.module.css";

export const Reservtion = () => {
  return (
    <section className={styles["reservation-section"]}>
      <div className={styles["left-top-img-wrapper"]}>
        <img
          src="/images/home/17.png"
          className={styles["left-top-img-wrapper-img"]}
        />
      </div>
      <div className={styles["right-bottom-img-wrapper"]}>
        <img
          src="/images/home/20.png"
          className={styles["left-top-img-wrapper-img"]}
        />
      </div>

      <div className={`${styles["img-top-dimond"]} dimond-image-wrapper`}>
        <img
          src="/images/home/border.png"
          alt="dimond-img"
          className="dimond-image-wrapper-img "
        />
      </div>
      <div className={styles["reservation-center-section"]}>
        <div className={styles["man-image-wrapper"]}>
          <img
            src="/images/menu/man.png"
            alt="man"
            className={styles["man-image-wrapper-img"]}
          />
        </div>
        <div className={styles["reservation-right-section"]}>
          <div className={styles["icon-heading"]}>
            <div className={styles["icon-wrapper"]}>
                <img src="/images/menu/reservebell.png" alt="reservation bell" className={styles["icon-bell-img"]}/>
            </div>
            <h2 className={styles["reservation-heading"]}>RESERVATION</h2>
          </div>

          <h2 className={styles["book-your-table-heading"]}>
            Book Your Favorite Table Easily
          </h2>
          <p className={styles["reservation-para"]}>
            Right Now, You can Easily Book The Best Table And Place For A Dream
            Night For You And Your Family. To Experience The Best Moments in Our
            Restaurant
          </p>
          <button className={styles["reserve-table-button"]}>
            RESERVE TABLE
          </button>
        </div>
      </div>
    </section>
  );
};
