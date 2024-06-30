import React from "react";

import styles from "../css/footer.module.css";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer-wrapper"]}>
        <div className={styles["footer-layout-wrapper"]}>
          <div className={styles["footer-first-wrapper"]}>
            <Link href="#" className={styles["route-name"]}>
              Home
            </Link>
            <Link href="#" className={styles["route-name"]}>
              MENU
            </Link>
            <Link href="#" className={styles["route-name"]}>
              ABOUT US
            </Link>
            <Link href="#" className={styles["route-name"]}>
              TRACK ORDER
            </Link>
            <Link href="#" className={styles["route-name"]}>
              CONTACT US
            </Link>
          </div>

          <div className={styles["footer-mid-section"]}>
            <div className={styles["logo-wrapper"]}>
              <img
                src="/images/home/logo.png"
                className={styles["footer-logo-img"]}
              />
            </div>

            <div className={`${styles["number-text-wrapper"]} `}>
              <p className={styles["number-text"]}>
                {" "}
                Hauptstraße 1, 84166 Adlkofen
              </p>
              <p className={styles["number-text-icon"]}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3c48e"
                >
                  <path d="M680-200h80v-560h-80v560ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0 120q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm-40-240h320v-160H240v160Zm160 120q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm0 120q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Zm120-120q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400Zm0 120q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360q-17 0-28.5 11.5T480-320q0 17 11.5 28.5T520-280Zm80 40v-480H200v480h400Zm80 120q-23 0-40.5-11T611-160H200q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h411q11-18 28.5-29t40.5-11h80q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120h-80ZM200-240v-480 480Z" />
                </svg>
                <span className={styles["number"]}>087077719501</span>
              </p>
            </div>
            <p className={styles["timing-wrapper"]}>
              Mo-Fr{" "}
              <span className={styles["yello-text"]}>&nbsp;17:00&nbsp; </span>
              bis&nbsp;
              <span className={styles["yello-text"]}> 22:30</span>
            </p>
            <p className={styles["timing-wrapper"]}>
              Sam
              <span className={styles["yello-text"]}>&nbsp;16:00&nbsp; </span>
              bis&nbsp;
              <span className={styles["yello-text"]}> 22:30</span>
            </p>
            <p className={styles["timing-wrapper"]}>
              Sonn und Feiertage
              <span className={styles["yello-text"]}>&nbsp;11:00&nbsp; </span>
              bis&nbsp;
              <span className={styles["yello-text"]}> 14:00</span>
            </p>
            <p className={styles["timing-wrapper"]}>
              und
              <span className={styles["yello-text"]}>&nbsp;16:00&nbsp; </span>
              bis&nbsp;
              <span className={styles["yello-text"]}> 22:30</span>
            </p>
          </div>
          <div className={styles["footer-third-section"]}>
            <h2 className={styles["footer-heading"]}> FOLGEN SIE UNS</h2>
            <div className={styles["heading-bottom-img-wrapper"]}>
              <img
                src="/images/home/Asset6.png"
                className={styles["heading-bottom-img-wrapper-img"]}
              />
            </div>

            <div className={styles["qr-code-wrapper"]}>
              <div className={styles["qr-code-image"]}>
                <img
                  src="/images/home/fbQR.png"
                  className={styles["qr-code-image-image"]}
                />
              </div>
              <FacebookIcon className={styles["icon-wrapper"]} />
              <p className={styles["para"]}>maharaja_adlkofen</p>
            </div>

            <div
              className={`${styles["qr-code-wrapper"]} ${styles["qr-code-wrapper-second"]}`}
            >
              <div className={styles["qr-code-image"]}>
                <img
                  src="/images/home/fbQR.png"
                  className={styles["qr-code-image-image"]}
                />
              </div>
              <InstagramIcon className={styles["icon-wrapper"]} />
              <p className={styles["para"]}>maharaja_adlkofen</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
