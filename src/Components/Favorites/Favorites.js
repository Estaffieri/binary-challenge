import React, { Component } from "react";
import DetailCard from "../DetailCard/DetailCard";
import "./Favorites.css";
import brokenHeart from "../../Assets/broken-heart.png";


//knows about currentFavorites and removeFavorites from APP

class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    displayCurrentFavorites = () => {
        return this.props.currentFavorites.map((entry, i) => {
            return <DetailCard entry={entry} key={i}
                removeFromFavorites={this.props.removeFromFavorites} />
        })
    }

    removeFavorite = (isFavorite) => {
        if (isFavorite === false) {

        }
    }

    // displayEmptyFavorites = () => { 
    //     <section className="noFavs">
    //         <h1>No favorites yet -- let's add some!</h1>
    //         <img className="broken-heart" src={brokenHeart} alt="vector-broken-heart-with-band-aid" />
    //         <p className="attribution">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
    //         </section>
    // }

    render() {
        return (
        <section className="favorites-container">
            <h1>Hello from Favorites</h1>
            {this.displayCurrentFavorites()}
            {/* {this.displayEmptyFavorites()} */}

            
        </section>

        )
    }
}

export default Favorites;