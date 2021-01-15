import React from "react";
import PortfolioItemsData from "./PortfolioItemsData";
import PortfolioItem from "./PortfolioItem";
import "../styles/portfolio.css";

const Portfolio = () => {
    return(
        <>
        <div className="row py-3 justify-content-center">
            <h4>Projects:</h4>
        </div>
        <div className="row py-3 justify-content-center" id="Portfolio">
            {PortfolioItemsData.map(
                () => {
                    return(
                        <PortfolioItem />
                    );
                }
            )}
        </div>
        </>
    );
}

export default Portfolio;