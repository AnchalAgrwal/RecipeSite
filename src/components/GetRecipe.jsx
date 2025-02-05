import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GetRecipe() {
  const [array, setArray] = useState();
  const { mealid } = useParams();
  console.log(mealid);

  async function details() {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const dataa = await data.json();
    console.log(dataa.meals[0]);
    setArray(dataa.meals[0]);
  }

  useEffect(() => {
    if (mealid) {
      details();
    }
  }, [mealid]);

  return (
    <div>
      {array ? (
        <p>
          <div className="getRecipe">
            <img
              src={array.strMealThumb}
              alt="food-image"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div
            style={{
              overflow: "hidden",
              margin: "20px",
              fontFamily: "sans-serif",
            }}
          >
            <h2 
              style={{
                fontWeight:"bold",
                fontSize:"2rem",  
              }}
            >Recipe Detail</h2>
            <button
              style={{
                color: "white",
                backgroundColor: "red",
                fontWeight: "520",
                padding: "5px 8px",
                borderRadius: "2px",
                border: "none",
                boxShadow: "2px 2px 5px gray",
                fontSize: "15px",
                margin:"15px 0px"
              }}
            >
              {array.strMeal}
            </button>
            <h3
              style={{
                fontWeight:"500",
                fontSize:"18px",
                marginBottom:"5px"
              }}
            >Instructions:</h3>
            <p>{array.strInstructions}</p>
          </div>
        </p>
      ) : null}
    </div>
  );
}

export default GetRecipe;
