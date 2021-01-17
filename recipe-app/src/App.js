import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {
  
  const APP_ID='2465753e'
  const APP_KEY='0ee2ce3f015e58f15b9b307f6839817e'

  // const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("Effect has began running");
    getRecipes();
  },[]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

   console.log(data.hits);
    setRecipes(data.hits);

  }

  return (
    <div className="App">
      <h1> Hello React</h1>
      <form className="form">  
        <input className="search-text" type="text" /> 
        <button type="submit" > Search</button>
        {/* <h2 onClick={()=> setCounter(counter+1)}> {counter}</h2> */}
      </form>
      {
        // recipes.map( recipe => (
        //   <Recipe />
        // ))
      }

    </div>
  );
}

export default App;
