import React, { useState, useEffect } from "react";
import RecipeCard from "./Recipe";
import SearchBar from "./SearchBar.jsx";
import HomeStyle from "./HomeStyle";
import Footer from "./Footer";

function Homepage() {
  const [array, setArray] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [searchVal, setSearchVal] = useState("");

  function handleChange(event) {
    console.log("changed");
    setSearchVal(event.target.value);
  }

  function handleClick() {
    console.log("clicked");
    setIngredients(searchVal);
  }

  useEffect(() => {
    getRecipe();
  }, [ingredients]);

  async function getRecipe() {
    console.log(ingredients);
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`
    );
    const result = await data.json();
    setArray(result.meals);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <HomeStyle />
      <div>
        <SearchBar change={handleChange} click={handleClick} keyDown={handleKeyDown} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {array ? (
          array.map((meal) => {
            return (
              <RecipeCard
                key={meal.idMeal}
                mealid={meal.idMeal}
                title={meal.strMeal}
                imgURL={meal.strMealThumb}
              />
            );
          })
        ) : (
          <p
            style={{
              margin: "auto",
              fontFamily: "sans-serif",
              marginBottom: "50px",
            }}
          >
            No Matches Found
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
