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

  }

  removeFromFavorites = () => {

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
            addToFavorites={this.addToFavorites}
            removeFromFavorites={this.removeFromFavorites}
            />
          </Route>

          <Route expactPath="/">
            <Home />
          </Route>
        </Switch>

      </div>
    );
}
}

export default App;
