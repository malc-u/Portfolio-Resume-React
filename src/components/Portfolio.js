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
                ({id, name, description, tools, itemUrl, itemImg}) => {
                    return(
                        <PortfolioItem 
                        id={id}
                        name={name}
                        description={description}
                        tools={tools}
                        itemUrl={itemUrl}
                        itemImg={itemImg}
                        />
                    );
                }
            )}
        </div>
        </>
    );
}

export default Portfolio;