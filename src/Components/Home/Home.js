import React, { Component } from "react";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import { getCategoryEntries, getRandomApi } from "../../apiCalls";

//knows addtoFavorites and removeFromFavorites from APP

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: [],
        }
    }

    getSearchResults = async (category, isRandom) => {
        if(isRandom === false) {
        await getCategoryEntries(category)
           .then((data) => this.setState({ entries: data.entries }))
           .catch((error) => alert(error.message));
        }
    }

    getNewRandom = async (isRandom) => {
        if (isRandom === true) {
        await getRandomApi()
            .then((data) => this.setState({ entries: data.entries }))
            .catch((error) => alert(error.message));
        };
    }

   
    render() {
        return (
            <section className="Home">
                <button onClick={() => this.getNewRandom(true)}>Get Random API</button>
                <div className="Spacer"></div>
                <SearchForm
                 getSearchResults={this.getSearchResults}
                 />
                <SearchResults
                 stateOfHome={this.state.entries}
                 addToFavorites={this.props.addToFavorites}
                 removeFromFavorites={this.props.removeFromFavorites} 
                 />
            </section>

        )
    }
}

export default Home;
