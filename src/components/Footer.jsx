import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        backgroundColor: "red",
        color: "white",
        overflow: "hidden",
        marginTop: "auto",
        marginBottom: "0",
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat, serif",
          fontWeight: "normal",
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>I 🤍 Food </p>

        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? { color: "white", textDecoration: "underline" }
              : { color: "white", textDecoration: "none" }
          }
        >
          <p>About Us </p>
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive
              ? { color: "white", textDecoration: "underline" }
              : { color: "white", textDecoration: "none" }
          }
        >
          <p>Contact Us </p>
        </NavLink>

        <p>Copyright © {new Date().getFullYear()}</p>
      </div>

      <hr />

      <div
        style={{
          textAlign: "center",
          margin: "15px auto",
          fontSize: "18px",
          fontWeight: "450",
          fontFamily: "Montserrat, serif",
        }}
      >
        Made with 🤍 by Anchal
      </div>
    </div>
  );
}

export default Footer;
