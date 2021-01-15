import React from "react";
import PortfolioItemsData from "./PortfolioItemsData";
import PortfolioItem from "./PortfolioItem";
import "../styles/portfolio.css";

const Portfolio = () => {
    return(
        <>
        <hr className="hr"/>
        <div className="row py-3 justify-content-center mx-0">
            <h4>Projects:</h4>
        </div>
        <div className="row py-3 justify-content-center mx-0" id="Portfolio">
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