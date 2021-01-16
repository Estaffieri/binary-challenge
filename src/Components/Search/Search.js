import React, { Component } from "react";
import './Search.css';
import { getAllCategories, getCategoryEntries, getRandomApi } from "../../apiCalls";
import ApiDetails from "../ApiDetails/ApiDetails";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            categories: ["Animals" , "Anime" , "Art"],
            search: {
                category: "",
                auth: "",
                https: "",
                cors: ""
            }
    
        }
    }

   addCategoriesforSearch() {
       const categoryOptions = this.state.categories.map(category => {
            console.log(category)
            return <option value="{category}" key="{}">{category}</option>
        })
        return categoryOptions
    }

   
    showDetailCard() {
       
    }

    render () {   
    
        return (
        <section className="api-results-container">
            <section role="search-box" className="Search">
                <label htmlFor="search-box">Lets find you an API!</label>
                <p>Pick a Category:</p>
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
                    <button onClick={this.showDetailCard()}>Search</button>
                    <button onClick={getRandomApi()}>Get Random API</button>
                </div>
            </section>
                <section className="search-results">

                </section>
        </section>

          
        )
    }
}


export default Search;
