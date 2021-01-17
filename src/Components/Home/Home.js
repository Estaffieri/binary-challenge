import React, { Component } from "react";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

/*I see this page as a sibling to Favorites but the search an display lives here */


class Home extends Component {
    constructor() {
        super()
        this.state = {}

    }


    render() {
        return (
            <section className="Home">
                <h1>Hello from Home</h1>
                <SearchForm />
                <SearchResults />
            </section>

        )
    }
}

export default Home;
