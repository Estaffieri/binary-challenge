import React, { Component } from "react";
import './SearchForm.css';
import { getAllCategories } from "../../apiCalls";

/*This is the heart of the application and will provide the most value to our users*/

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            category: ""
            }
        }
    

    componentDidMount = async () => {
        await getAllCategories()
            .then((data) => this.setState({ categories: data }))
            .catch((error) => alert(error.message));
    };

   addCategoriesforSearch = () => {
         return this.state.categories.map((category, i) => {
             return <option value={category} key={i}>{category}</option>
       })
   };

  handleChange = (e) => {
    e.preventDefault();
      this.setState({[e.target.name]: e.target.value})

   }

   handleSubmit = (e) => {
       e.preventDefault()
       if (this.state.category !== "") {
           this.props.getSearchResults(this.state.category)
       } else {
           alert("Please select a category or generate a random API")
       }
   }

    render () {   
    
        return (
        <section className="api-results-container">
            <form role="search" className="search-box">
                <label htmlFor="search-box">Lets find you an API!</label>
                <p>Category:</p>
                    <select name="category" id="category-selection" onChange={this.handleChange}>
                        <option value="">Pick One</option>
                    {this.addCategoriesforSearch()}
                </select>
                <div className="button-container">
                        <button onClick={(e) => this.handleSubmit(e)}>Search</button>
                    <div className="spacer"></div>
                    {/* <button onClick={(e) => this.handleSubmit(e)}>Get Random API</button> */}
                </div>
            </form>
        </section>

          
        )
    }
}


export default SearchForm;
