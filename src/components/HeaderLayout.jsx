import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <header className="flex flex-col items-center mt-5">
      <h1 className="text-5xl text-green-700 font-bold">MicroFied</h1>
      <ul className="flex gap-3 text-2xl  ">
        <li>
          <NavLink to="/" className="nav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" className="nav">
            Checkout
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
