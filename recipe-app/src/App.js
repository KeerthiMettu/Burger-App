import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "2465753e";
  const APP_KEY = "0ee2ce3f015e58f15b9b307f6839817e";

  // const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search , setSearch] = useState("");
  const [query, setQuery] = useState("Egg");

  useEffect(() => {
    console.log("Effect has began running");
    getRecipes();
    console.log("giving the search text to API")
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    console.log(data.hits);
    setRecipes(data.hits);
  };


const updateSearchHandler = (event) =>{
  setSearch(event.target.value)
  console.log(search);
}

const queryHandler = e => {
  //to stop the page refresh continuously
  e.preventDefault(); 
  setQuery(search); //sets the query after entering text in textbox
  setSearch(""); //resets the text to empty 
}


  return (
    <div className="App">
      <h1> Recipes App</h1>
      <form className="form" onSubmit={queryHandler} >
        <input className="search-text" type="text" value ={search} onChange={updateSearchHandler} />
        <button className="button" type="submit" > Search</button>
        {/* <h2 onClick={()=> setCounter(counter+1)}> {counter}</h2> */}
      </form>
      <div className="content">
      {recipes.map((recipe) => (
        <Recipe
        key ={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories} carblabel ={recipe.recipe.dietLabels[0]}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
