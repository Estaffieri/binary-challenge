import React, { Component } from "react";
import './SearchForm.css';
import { getAllCategories, getCategoryEntries, getRandomApi } from "../../apiCalls";
import DetailCard from "../DetailCard/DetailCard";

/*This is the heart of the application and will provide the most value to our users*/

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            categories: [],
            random: [],
            search: {
                category: "",
                auth: "",
                https: "",
                cors: ""
            }
    
        }
    }

    componentDidMount = async () => {
        await getAllCategories()
            .then((data) => this.setState({ categories: data }))
            .catch((error) => alert(error.message));
    };

  
   addCategoriesforSearch = () => {
         const categoryOptions = this.state.categories.map((category, i) => {
             return <option value="{category}" key={i}>{category}</option>
       })
       return categoryOptions
   }

    getNewRandom = async () => {
        await getRandomApi()
            .then((data) => this.setState({ random: data.entries }))
            .catch((error) => alert(error.message));
    };

   displayRandomResult = () => {
       if (this.state.random.length !== 0) {
           return <div>
                <DetailCard {...this.state.random} /> 
                </div>
       }
   }

  handleChange = (event) => {
    event.preventDefault()
    console.log(event)

   }

    render () {   
    
        return (
        <section className="api-results-container">
            <form role="search" className="search-box">
                <label htmlFor="search-box">Lets find you an API!</label>
                <p>Category:</p>
                    <select name="category" id="category-selection">
                        <option value="pick-one">Pick One</option>
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
            </form>
        </section>

          
        )
    }
}


export default SearchForm;
