import React from 'react';
import "./DetailCard.css";

const DetailCard = ({entry, addToFavorites, removeFromFavorites}) => {


    function handleClick(e, fav) {
        e.preventDefault()
    if (fav === true) {
        addToFavorites(e.target.id)
    } 
    }



    return (
        <section className="card">
            <section className="headline">
                <button className="favorite-button" onClick={(e) => handleClick(e, true)}>❤️</button>
                <h2 className="api-name">{entry.API}</h2>
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