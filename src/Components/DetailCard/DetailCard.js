import React from 'react';
import "./DetailCard.css";
import activeFav from "../../Assets/active-favorite-icon.png";
import inactiveFav from "../../Assets/inactive-favorite-icon.png";

const DetailCard = ({entry, addToFavorites, removeFromFavorites}) => {

    // function flagFavorite = () => {

    // }
  

    return (
        <section className="detail-card">
            <section className="headline">
                <h2 className="api-name">{entry.API}</h2>
                <img
                 className="inactiveFav"
                 title="Add to Favorites"
                 onClick={(e) => addToFavorites(e, entry)}
                 src={inactiveFav}
                 alt="inactive favorite icon"
                 />
            </section>
            <p className="description">{entry.Description}</p>
            <p className="category">{entry.Category}</p>
            <p className="cors">{entry.Cors}</p>
            <p className="auth">{entry.Auth}</p>
            <p className="https">{entry.HTTPS}</p>
            <p className="link">{entry.Link}</p>
        </section>
    );
}


export default DetailCard;