"use client";
import { createContext } from "react";

export const userContext = createContext();

import { useState } from "react";

export const UserProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [menuDetails, setMenuDetails] = useState([]);

  return (
    <userContext.Provider
      value={{
        setIsEnglish,
        isEnglish,
        setMenuDetails,
        menuDetails,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
