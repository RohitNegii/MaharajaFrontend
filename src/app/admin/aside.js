// components/Sidebar.js
"use client"
import Link from "next/link";
import { useEffect } from "react";

const Sidebar = () => {
     useEffect(() => {
       const mapElement = document.getElementsByClassName("map")[0];
       const footerElement = document.getElementsByClassName("footer")[0];

       if (mapElement) mapElement.style.display = "none";
       if (footerElement) footerElement.style.display = "none";

       return () => {
         if (mapElement) mapElement.style.display = "";
         if (footerElement) footerElement.style.display = "";
       };
     }, []);
  return (
    <div className="flex flex-col w-64 h-full bg-gray-800 text-white fixed">
      <nav className="flex flex-col mt-10">
        <Link
          href="/admin/category"
          className="px-4 py-2 text-lg hover:bg-gray-700"
        >
          Category
        </Link>
        <Link
          href="/admin/dish"
          className="px-4 py-2 text-lg hover:bg-gray-700"
        >
          Dish
        </Link>
        <Link
          href="/admin/reservedtable"
          className="px-4 py-2 text-lg hover:bg-gray-700"
        >
          Reserved Table List
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
