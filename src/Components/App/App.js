import React, { Component } from "react";
import './App.css';
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import { Route, NavLink, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
    }
  }

  addToFavorites = () => {
    console.log("I am add to favorites")

  }

  removeFromFavorites = () => {
    console.log("I am remove from favorites")
  }

 
  render () {
    return (
      <div className="App">
        <header>

          <Route>
            <NavLink to="/">
              <h1>APIs for Dayssssss</h1>
            </NavLink>
          </Route>

          <Route>
          <NavLink to="/Favorites">
              ❤️
          </NavLink>
        </Route>

        </header>

        <Switch>
          <Route path="/Favorites">
            <Favorites
            currentFavorites={this.state.favorites}
            removeFromFavorites={this.removeFromFavorites}
            />
          </Route>

          <Route expactPath="/">
            <Home
              addToFavorites={this.addToFavorites}
              removeFromFavorites={this.removeFromFavorites} />
          </Route>
        </Switch>

      </div>
    );
}
}

export default App;
