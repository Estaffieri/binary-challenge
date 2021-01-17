import React, { Component } from "react";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import { getCategoryEntries } from "../../apiCalls";

/*I see this page as a sibling to Favorites but the search an display lives here */


class Home extends Component {
    constructor() {
        super()
        this.state = {
            entries: []
        }

    }

    getSearchResults = async (category) => {
        await getCategoryEntries(category)
           .then((data) => this.setState({ entries: data.entries }))
           .catch((error) => alert(error.message));
    }

    render() {
        return (
            <section className="Home">
                <h1>Hello from Home</h1>
                <SearchForm getSearchResults={this.getSearchResults} />
                <SearchResults showMe={this.state.entries} />
            </section>

        )
    }
}

export default Home;
