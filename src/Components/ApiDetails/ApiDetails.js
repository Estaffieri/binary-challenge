import React from 'react';
import "./ApiDetails.css";

const ApiDetails = ({API, Auth, HTTPS, Cors, Link, Category}) => {
    return (
        <section className="entry-card">
            <h2 className="api-name">{API}</h2>
            <p>{Auth}</p>
            <p>{HTTPS}</p>
            <p>{Cors}</p>
            <p>{Link}</p>
            <p>{Category}</p>
        </section>

    )
}


export default ApiDetails;