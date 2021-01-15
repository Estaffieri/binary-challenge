import React, { Component } from "react";
import "./Home.css";
import ApiDetails from "../ApiDetails/ApiDetails";
import { getAllCategories, getCategoryEntries } from "../../apiCalls";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            focus: {}
        }

    }

    componentDidMount() {

        this.setState(getAllCategories())
        console.log(this.state.categories)

        
    }

    selectCategory() {
        getCategoryEntries(this.props.category)
        .then(selectedCategory => {
            this.setState.focus({focus: selectedCategory.category})
        })
    }

    displayCategories = () => {
        const cats = this.state.categories.map(category => {
            return (<li>{category}</li>)
        })
        return cats
    }
  


    render() {
        return (
            <section className="category-container">
                <h1>"Home"</h1>
                <nav>
                    <ul>
                        {this.displayCategories()}
                    </ul>

                </nav>
                <ApiDetails />

            </section>

        )
    }
}

export default Home;
