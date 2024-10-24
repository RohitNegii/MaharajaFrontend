"use client";
import React, { useEffect } from "react";

const AddToCart = ({ cartItems, setCartItems }) => {
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="cart-items flex-grow overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex-grow">
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <div className="flex items-center">
              <button
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
            </div>
            <div className="ml-4">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <p className="text-xl font-semibold">Total: ${getTotal()}</p>
      </div>
      <div className="text-right mt-4">
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
