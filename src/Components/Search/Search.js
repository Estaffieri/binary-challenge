import React, { Component } from "react";
import './Search.css';
import { getAllCategories, getCategoryEntries, getRandomApi } from "../../apiCalls";
import DetailCard from "../DetailCard/DetailCard";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            categories: [],
            random: {},
            search: {
                category: "",
                auth: "",
                https: "",
                cors: ""
            }
    
        }
    }

    componentDidMount () {
        const categoryNames = getAllCategories()
        this.setState({categories: categoryNames.data})
        console.log(this.state.categories)
    }

    // getCategories() {
    //     const categoryNames = getAllCategories();
    //     this.setState({categories: categoryNames})
    // }

   addCategoriesforSearch() {
        this.state.categories.map((category, i) => {
           return <option value="{category}" key={i}>{category}</option>
       })
   }

    getNewRandom() {
       const data = getRandomApi();
       this.setState({random: data.entries})
       

    };

    render () {   
    
        return (
        <section className="api-results-container">
            <section role="search" className="search-box">
                <label htmlFor="search-box">Lets find you an API!</label>
                <p>Category:</p>
                <select name="category" id="category-selection">
                    <option value="any">Any</option>
                    {this.addCategoriesforSearch()}
                </select>
                <p>Auth:</p>
                <select name="auth" id="auth-selection">
                    <option value="any">Any</option>
                        <option value="apiKey">apiKey</option>
                        <option value="0Auth">0Auth</option>
                        <option value="No">No</option>
                </select>
                <p>HTTPS:</p>
                <select name="https" id="https-selection">
                    <option value="any">Any</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                </select>
                <p>CORS:</p>
                <select name="cors" id="cors-selection">
                    <option value="any">Any</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Unknown">Unknown</option>
                </select>
                <div className="button-container">
                    <button>Search</button>
                    <div className="spacer"></div>
                    <button onClick={this.getNewRandom}>Get Random API</button>
                </div>
            </section>
                <section className="search-results">
                <DetailCard />
                </section>
        </section>

          
        )
    }
}


export default Search;
