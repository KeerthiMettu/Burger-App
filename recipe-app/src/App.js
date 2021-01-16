import React from 'react';
import './App.css';

function App() {
  
  // const APP_ID='2465753e'
  // const APP_KEY='0ee2ce3f015e58f15b9b307f6839817e'

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1> Hello React</h1>
      <form className="form">  
        <input className="search-text" type="text" /> 
        <button type="submit"> Search</button>
      </form>
    </div>
  );
}

export default App;
