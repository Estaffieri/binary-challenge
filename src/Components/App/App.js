import React, { Component } from "react";
import './App.css';
import favoritesNav from "../../Assets/Favorites-nav-icon.png";
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

  addToFavorites = (e, newFavorite) => {
    this.setState({ favorites: [...this.state.favorites, newFavorite]})
    console.log("I am add to favorites",  newFavorite)

  }
 
  render () {
    return (
      <div className="App">
        <header>

          <Route>
            <NavLink to="/">
              <h1>Find An API</h1>
            </NavLink>
          </Route>
          <Route>
          <NavLink to="/Favorites">
             <img
              className="to-favorites-icon"
              title="Navigate to Favorites page"
              src={favoritesNav}
              alt="To Favorites heart icon"
              />
          </NavLink>
        </Route>

        </header>

        <Switch>
          <Route path="/Favorites">
            <Favorites
            currentFavorites={this.state.favorites}
            addToFavorites={this.addToFavorites}
            />
          </Route>

          <Route expactPath="/">
            <Home
              addToFavorites={this.addToFavorites}
              />
          </Route>
        </Switch>
        <div>
          <p className="attribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        </div>
      </div>
    );
}
}

export default App;
