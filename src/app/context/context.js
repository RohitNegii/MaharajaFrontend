"use client";
import { createContext } from "react";

export const userContext = createContext();

import { useState } from "react";

export const UserProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <userContext.Provider
      value={{
        setIsEnglish,
        isEnglish,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
