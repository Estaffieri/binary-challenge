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

    getSearchResults = async (category, auth, https, cors) => {
       const catResults = await getCategoryEntries(category)
       const catFilter = catResults.entries.category.filter(category => category.Category === category)
    //    const authFilter = catResults.entries.filter(auth => auth.Auth === auth)
    //    const httpsFilter = catResults.entries.filter(https => https.HTTPS === https)
    //    const corsFilter = catResults.entries.filter(cors => cors.Cors === cors)

        console.log(catResults.entries, catFilter)

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
