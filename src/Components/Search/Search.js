import React, { Component } from "react";
import './Search.css';
import { getAllCategories, getCategoryEntries } from "../../apiCalls";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            categories: ["Animals" , "Anime" , "Art"]
    
        }
    }

    addCategoriesforSearch = () => {
        this.state.categories.map(category => {
            return <option value="{category}">{category}</option>
        })
    }

    render () {   
        return (
            <section role="search" className="Search">
                <label for="search-bar">Lets find you an API!</label>
                <select name="category" id="category-selection">
                     <option>Category</option>

                </select>
            </section>
        )
    }
}


export default Search;
