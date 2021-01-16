import React, { Component } from "react";
import './Search.css';
import { getAllCategories, getCategoryEntries } from "../../apiCalls";
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
            <section role="search" className="Search">
                <label htmlFor="search">Lets find you an API!</label>
                <p>Pick a Category:</p>
                <select name="category" id="category-selection">
                    <option value="any">Any</option>
                    {this.addCategoriesforSearch()}
                </select>
                <p>Auth:</p>
                <select name="auth" id="auth-selection">
                    <option value="any">Any</option>
                </select>
                <p>HTTPS:</p>
                <select name="https" id="https-selection">
                    <option value="any">Any</option>
                </select>
                <p>CORS:</p>
                <select name="cors" id="cors-selection">
                    <option value="any">Any</option>
                </select>
                    
                
                <button onClick={this.showDetailCard()}>Search</button>
            </section>
        )
    }
}


export default Search;
