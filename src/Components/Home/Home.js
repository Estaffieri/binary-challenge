import React, { Component } from "react";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import { getCategoryEntries } from "../../apiCalls";

/*I see this page as a sibling to Favorites but the search an display lives here */


class Home extends Component {
    constructor() {
        super()
        this.state = {}

    }

    getSearchResults = async (category) => {
       const catResults = await getCategoryEntries(category)
       const catFilter = catResults.entries.filter(entry => entry.Category === category)
     
        console.log("matching categories", catFilter)
        

        //filter
        //set it state in home
        //pass as prop to SearchResults

    }


    render() {
        return (
            <section className="Home">
                <h1>Hello from Home</h1>
                <SearchForm getSearchResults={this.getSearchResults} />
                <SearchResults />
            </section>

        )
    }
}

export default Home;
