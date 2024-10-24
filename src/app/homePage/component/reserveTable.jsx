"use client"
import React, { useState } from "react";
import axios from "axios";
import styles from "../css/reserveTable.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/reserve`;



const ReserveTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    numberOfPeople: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phoneNumber) {
      alert("Phone number is mandatory");
      return;
    }
    try {
      const response = await axios.post(apiEndpoint, formData);
      alert("Table reserved successfully");
      setFormData({
        name: "",
        date: "",
        time: "",
        numberOfPeople: "",
        phoneNumber: "",
        email: "",
      });
    } catch (error) {
      console.error("There was an error reserving the table!", error);
    }
  };

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

        <form className={styles["form-wrapper"]} onSubmit={handleSubmit}>
          <div className={styles["first-row-wrapper"]}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={styles["half-input"]}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={styles["half-input"]}
            />
          </div>
          <div className={styles["center-text"]}>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={styles["full-text"]}
            />
          </div>
          <div className={styles["first-row-wrapper"]}>
            <input
              type="number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              placeholder="Number of People"
              className={styles["half-input"]}
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={styles["half-input"]}
              required
            />
          </div>
          <div className={styles["center-text"]}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={styles["full-text"]}
            />
          </div>
          <div className={styles["btn-wrapper"]}>
            <button type="submit" className={styles["book-a-tabel-btn"]}>
              BOOK A TABLE
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReserveTable;
