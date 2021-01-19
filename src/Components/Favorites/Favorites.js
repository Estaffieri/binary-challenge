import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import "./Favorites.css";
import brokenHeart from "../../Assets/broken-heart.png";
import PropTypes from 'prop-types';

const Favorites = ({ currentFavorites, addToFavorites }) => {

   const displayDetailCards = () => {
        return currentFavorites.map((entry, i) => {
            return <DetailCard entry={entry} key={i}
                addToFavorites={addToFavorites}
                />
        })
    }
   
    if (currentFavorites.length === 0) {
       return ( <section className="noFavs">
            <h1 className="prompt">No favorites yet -- let's add some!</h1>
            <img className="broken-heart" src={brokenHeart} alt="vector-broken-heart-with-band-aid" />
        </section>
       )
    } else {
        return (
            <section className="favorites-container">
                <h1>My Favorite APIs</h1>
                {displayDetailCards()}
            </section>

        )    
    }
}

export default Favorites;

Favorites.propTypes = {
    currentFavorites: PropTypes.array,
    addToFavorites: PropTypes.func
}