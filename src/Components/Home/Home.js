import React, { Component } from "react";
import "./Home.css";
import Search from "../Search/Search";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }


    render() {
        return (
            <section className="Home">
                <h1>"Home"</h1>
                <Search />

            </section>

        )
    }
}

export default Home;
