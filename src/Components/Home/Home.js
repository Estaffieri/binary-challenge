import React, { Component } from "react";
import "./Home.css";
// import { getAllCategories, getCategoryEntries } from "../../apiCalls";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: ["Test", "Test"]
        }

    }

    dropDownMaker() {
        this.state.categories.map(category => {
           return <div>{category}</div>
        })
    }


    render() {
        return (
            <section className="category-container">
                <h1>"Home"</h1>
                

            </section>

        )
    }
}

export default Home;
