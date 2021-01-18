import React from 'react';
import "./DetailCard.css";

/*This is our smallest component and should just organize
 and style the data from the API about the API */

const DetailCard = ({entry}) => {
    return (
        <section className="card">
            <h2 className="api-name">{entry.API}</h2>
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