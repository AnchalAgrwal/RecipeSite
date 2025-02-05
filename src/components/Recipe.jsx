import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function RecipeCard(props) {
  const [hover, setHover] = useState(false);
  const [divHover, setDivHover] = useState(false);

  return (
    <div
      className="recipeCard"
      style={{
        border: divHover ? "1.3px solid red" : "none",
      }}
      onMouseEnter={() => setDivHover(true)}
      onMouseLeave={() => setDivHover(false)}
    >
      <img src={props.imgURL} alt="recipe image" style={{ width: "100%" }} />
      <div
        style={{
          textAlign: "center",
          fontFamily: "Montserrat, serif",
          fontWeight: "450",
          fontSize: "20px",
          color: "black",
          padding: "0px",
          margin:"10px",
        }}
      >
        <p>{props.title}</p>
      </div>

      <NavLink to={`/getRecipe/${props.mealid}`}>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              color: "white",
              backgroundColor: "red",
              fontWeight: "520",
              borderRadius: "25px",
              border: "none",
              padding: "8px",
              marginBottom: "20px",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: hover
                ? " 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"
                : " 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)",
              transitionDuration: "0.2s",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Get Recipe
          </button>
        </div>
      </NavLink>
    </div>
  );
}

export default RecipeCard;
