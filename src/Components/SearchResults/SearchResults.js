import React from "react";
import "./SearchResults.css";
import DetailCard from "../DetailCard/DetailCard";


const SearchResults = ({stateOfHome, addToFavorites}) => {
  
   const displayDetailCards = () => {
        return stateOfHome.map((entry, i) => {
            return <DetailCard entry={entry} key={i}
                    addToFavorites={addToFavorites}
                    />
        })
    }
        return (
            <div className="search-results-container">
            <h1>Search Results</h1>
            {displayDetailCards()}
            </div>
        )
    
}

export default SearchResults;