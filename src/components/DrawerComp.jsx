import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, List, ListItemButton } from "@mui/material";

function DrawerComp() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="menuIcon">
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <List>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "red",
                    fontFamily: "sans-serif",
                    textDecoration: "underline",
                  }
                : {
                    color: "red",
                    fontFamily: "sans-serif",
                    textDecoration: "none",
                  }
            }
          >
            <ListItemButton>Home</ListItemButton>
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "red",
                    fontFamily: "sans-serif",
                    textDecoration: "underline",
                  }
                : {
                    color: "red",
                    fontFamily: "sans-serif",
                    textDecoration: "none",
                  }
            }
          >
            <ListItemButton>About</ListItemButton>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "red",
                    fontFamily: "sans-serif",
                    textDecoration: "underline",
                  }
                : {
                    color: "red",
                    fontFamily: "sans-serif",
                    textDecoration: "none",
                  }
            }
          >
            <ListItemButton>Contact</ListItemButton>
          </NavLink>
        </List>
      </Drawer>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="26"
        viewBox="0 0 20 25"
        fill="white"
        onClick={() => setOpen(!open)}
      >
        <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
      </svg>
    </div>
  );
}

export default DrawerComp;
