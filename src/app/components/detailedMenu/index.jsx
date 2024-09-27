"use client"
import DetailMenu from './detailMenu'
    import React, { useState } from "react";


const Index = () => {
    const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Dish Name', quantity: 1, price: 10.0 },
    // Add more items as needed
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  return (
    <>
    {/* <DetailMenu/> */}



    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b py-4">
            <div className="flex-grow">
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
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


    
    
    </>
  )
}

export default Index