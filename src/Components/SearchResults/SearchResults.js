import React, { Component } from "react";
import "./SearchResults.css";
import DetailCard from "../DetailCard/DetailCard";


class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    displayDetailCards = () => {
        console.log(this.props.stateOfHome)
        return this.props.stateOfHome.map((entry, i) => {
            return <DetailCard entry={entry} key={i} />
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