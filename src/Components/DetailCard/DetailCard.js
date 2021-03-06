import React from 'react';
import "./DetailCard.css";
import inactiveFav from "../../Assets/inactive-favorite-icon.png";
import PropTypes from 'prop-types';

const DetailCard = ({entry, addToFavorites}) => {

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

DetailCard.propTypes = {
    entry: PropTypes.object,
    addToFavorites: PropTypes.func
}