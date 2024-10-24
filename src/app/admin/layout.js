"use client"
import React from "react";
import Sidebar from "./aside";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-4">{children}</main>
    </div>
  );
};

export default Layout;
