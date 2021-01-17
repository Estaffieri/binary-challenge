import React, { Component } from "react";
import './SearchForm.css';
import { getAllCategories, getRandomApi } from "../../apiCalls";

/*This is the heart of the application and will provide the most value to our users*/

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            random: [],
            category: ""
            }
        }
    

    componentDidMount = async () => {
        await getAllCategories()
            .then((data) => this.setState({ categories: data }))
            .catch((error) => alert(error.message));
    };

  
   addCategoriesforSearch = () => {
         const categoryOptions = this.state.categories.map((category, i) => {
             return <option value={category} key={i}>{category}</option>
       })
       return categoryOptions
   };

    getNewRandom = async () => {
        await getRandomApi()
            .then((data) => this.setState({ random: data.entries }))
            .catch((error) => alert(error.message));
    };

//    displayRandomResult = () => {
//        if (this.state.random.length !== 0) {
//            return <div>
//                 <DetailCard {...this.state.random} /> 
//                 </div>
//        }
//    };

  handleChange = (e) => {
    e.preventDefault();
      this.setState({[e.target.name]: e.target.value})

   }

   handleSubmit = (e) => {
       e.preventDefault()
       if (this.state.category !== "") {
           this.props.getSearchResults(this.state.category)
       } else {
           alert("Please select a category")
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
                    <button onClick={this.getNewRandom}>Get Random API</button>
                </div>
            </form>
        </section>

          
        )
    }
}


export default SearchForm;
