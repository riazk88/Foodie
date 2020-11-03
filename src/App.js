import React from "react";
import './App.css';

const App = () => {

  const APP_ID='14ed0ad9';
  const APP_KEY="ebb1f6f6e4aa0f8e89227b170bd47a1e"; 

  const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
