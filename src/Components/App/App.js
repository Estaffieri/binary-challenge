import React from "react";
import './App.css';
import Home from "../Home/Home";

/*This should just be a switchboard between components
Acceptance or integration tests should be in the app testing file */


function App() {

 
  
  return (
    <div className="App">
      <h1>"App"</h1>
      <Home />
       
    </div>
  );
}

export default App;
