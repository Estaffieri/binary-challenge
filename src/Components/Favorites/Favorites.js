import React, { Component } from "react";
import "./Favorites.css";

/*This should be a sibling to Home and will display favorited DetailCards
removing them from here would be helpful too*/

class Favorites extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
        <h1>Hello from Favorites</h1>
        )
    }
}

export default Favorites;