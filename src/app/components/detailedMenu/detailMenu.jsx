import React, { useEffect, useState } from "react";
import styles from "../menuPage/css/menu.module.css";

import AddToCart from "../menuPage/component/addToCart";
import axios from "axios";
import { Modal, Box, Slide } from "@mui/material";

const apiEndpoint = process.env.NEXT_PUBLIC_API_BASE_URL;

const DetailMenu = () => {
  const [dishData, setDishData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    const route = window.location.href.split("/");

    const fetchDish = async () => {
      try {
        const dishDataa = await axios(
          `${apiEndpoint}/dishes/${route[route.length - 1]}`
        );
        setDishData(dishDataa.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch the dish.");
        setLoading(false);
      }
    };

    if (route) {
      fetchDish();
    }
  }, []);

  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === dishData._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === dishData.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: dishData._id,
          name: dishData.name,
          quantity: 1,
          price: dishData.price,
        },
      ]);
    }
    setIsCartOpen(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section
        className={styles["menu-section"]}
        style={{ background: "var(--primaryColor)" }}
      >
        <h1>Detail Menu</h1>
        <div className={`${styles["top-left-img-wrapper"]} `}>
          <img
            src="/images/home/Asset5.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={`${styles["top-right-img-wrapper"]} `}>
          <img
            src="/images/home/Asset4.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={`${styles["bottom-left-img-wrapper"]} `}>
          <img
            src="/images/home/Asset2.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>
        <div className={`${styles["bottom-right-img-wrapper"]} `}>
          <img
            src="/images/home/Asset3.png"
            className={styles["top-left-img-wrapper-img"]}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.menu}>
            <div className={styles.dishPrice} style={{ alignItems: "center" }}>
              <h1 className={styles.header}>
                {dishData.number}.{" "}
                <span className={styles.pizza}>{dishData.name}</span>
              </h1>
              <span className={styles.price}>€{dishData.price}</span>
            </div>

            <div className={styles.dishPrice}>
              <p className={styles.dishDescription}>{dishData.description}</p>

              <div className={styles.quantityContainer} onClick={addToCart}>
                Add To Cart
              </div>
            </div>

            {dishData.showDrinks && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Size</h2>
                <button className={styles.sizeButton}>Small</button>
                <button className={styles.sizeButton}>Medium</button>
                <button className={styles.sizeButton}>Large</button>
              </div>
            )}

            {dishData.showToopins && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Add ons</h2>
                <div className={`${styles.addOns} sm`}>
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <label key={index} className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />{" "}
                        Tomato Sauce
                      </label>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Modal open={isCartOpen} onClose={handleClose}>
        <Slide direction="left" in={isCartOpen} mountOnEnter unmountOnExit>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "80%",
              maxWidth: "400px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              overflowY: "auto",
            }}
          >
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={handleClose}
            >
              &times;
            </button>
            <AddToCart cartItems={cartItems} setCartItems={setCartItems} />
          </Box>
        </Slide>
      </Modal>
    </>
  );
};

export default DetailMenu;
