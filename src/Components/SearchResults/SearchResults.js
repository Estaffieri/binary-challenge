import React, { Component } from "react";
import "./SearchResults.css";
import DetailCard from "../DetailCard/DetailCard";


class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getFavorites = (card, fav) => {
        if (fav === true) {
           this.props.favorites.setState({ favorites: card })
        }
    }


    displayDetailCards = () => {
        return this.props.stateOfHome.map((entry, i) => {
            return <DetailCard entry={entry} key={i} 
                    addToFavorites={this.props.addToFavorites}
                    removeFromFavorites={this.props.removeFromFavorites}/>
        })
    }

    render() {
        return (
            <div>
            <h1>Search Results</h1>
            {this.displayDetailCards()}
            </div>
        )
    }
}

export default SearchResults;