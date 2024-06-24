import React from "react";

import styles from "../css/reserveTable.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ReserveTable = () => {
  return (
    <>
      <section className={styles["reserve-table-section"]}>
        <h2 className={styles["reserve-table-heading"]}> RESERVE A TABLE</h2>
        <div
          className={`${styles["after-heading-img-div"]} dimond-image-wrapper`}
        >
          <img
            src="/images/Asset9.png"
            alt="heyy"
            className={styles["after-heading-img"]}
          />
        </div>

        <div className={styles["form-wrapper"]}>
          <div className={styles["first-row-wrapper"]}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles["half-input"]}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles["half-input"]}
            />
          </div>
          <div className={styles["center-text"]}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles["full-text"]}
            />
          </div>

          <div className={styles["first-row-wrapper"]}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles["half-input"]}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles["half-input"]}
            />
          </div>
          <textarea className={styles["text-area"]} rows={5}></textarea>
        </div>
        <div className={styles["btn-wrapper"]}>
          <button className={styles["book-a-tabel-btn"]}>BOOK A TABLE</button>
        </div>
      </section>
    </>
  );
};

export default ReserveTable;
