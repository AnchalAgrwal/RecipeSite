import React from "react";
import DrawerComp from "./DrawerComp";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "50px",
        alignItems: "center",
        display: "flex",
        direction: "row",
        padding:"15px",
      }}
    >
      <p
        style={{
          color: "white",
          fontFamily: "Montserrat, serif",
          fontWeight: "bold",
          marginRight: "auto",
        }}
      >
        I 🤍 Food
      </p>

      <div className="tabs">
        <ul
          style={{
            display: "flex",
            color: "white",
            listStyle: "none",
            gap: "18px",
            fontFamily: "sans-serif",
            textDecoration: "none",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "underline" }
                : { color: "white", textDecoration: "none" }
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "underline" }
                : { color: "white", textDecoration: "none" }
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "underline" }
                : { color: "white", textDecoration: "none" }
            }
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <DrawerComp />
    </div>
  );
}

export default Header;
