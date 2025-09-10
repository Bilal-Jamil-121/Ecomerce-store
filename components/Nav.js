"use client";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [menuclick, setmenuclick] = useState(false);
  const pathname = usePathname(); // ✅ correct way in app router

  function handlemenu() {
    setmenuclick(!menuclick);
  }

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-100 text-black px-6 md:px-32 py-4 fixed z-100 w-screen shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
         <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Bilal Store
        </h1>
        </Link>
       

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-white font-semibold" : ""
              } hover:text-white transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-white font-semibold" : ""
              } hover:text-white transition`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className={`${
                pathname === "/product" ? "text-white font-semibold" : ""
              } hover:text-white transition`}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-white font-semibold" : ""
              } hover:text-white transition`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Add_Cart"
              className="text-black cursor-pointer flex p-1 items-center"
            > <FaShoppingCart  className={`${
                pathname === "/Add_Cart" ? "text-white" : ""
              } hover:text-white transition`} />
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={handlemenu}
          className="md:hidden bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <img className="h-6 w-6" src="/menu.svg" alt="menu" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuclick && (
        <div className="md:hidden bg-gray-100 rounded mt-3 px-4 py-3 shadow-inner">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
            <Link href="/" onClick={handlemenu}>
              <li className="hover:text-blue-600 transition w-full px-2 py-1">
                Home
              </li>
            </Link>
            <Link href="/about" onClick={handlemenu}>
              <li className="hover:text-blue-600 transition w-full px-2 py-1">
                About
              </li>
            </Link>
            <Link href="/contact" onClick={handlemenu}>
              <li className="hover:text-blue-600 transition w-full px-2 py-1">
                Contact
              </li>
            </Link>
            <Link href="/product" onClick={handlemenu}>
              <li className="hover:text-blue-600 transition w-full px-2 py-1">
                Product
              </li>
            </Link>

            <Link
              className="text-black cursor-pointer flex p-1 items-center"
              href="/Add_Cart"
              onClick={handlemenu}
            >
              <li className="flex gap-2">
                <span>Cart</span>
                <FaShoppingCart />
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
