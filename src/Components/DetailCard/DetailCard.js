import React from 'react';
import "./DetailCard.css";

const DetailCard = (props) => {
    return (
        <section className="card">
            <h2 className="api-name">{props.API}</h2>
            <p className="description">{props.Description}</p>
            <p className="category">{props.Category}</p>
            <p className="cors">{props.Cors}</p>
            <p className="auth">{props.Auth}</p>
            <p className="https">{props.HTTPS}</p>
            <p className="link">{props.Link}</p>
        </section>
    );
}


export default DetailCard;