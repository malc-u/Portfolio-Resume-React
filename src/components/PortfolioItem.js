import React from "react";

const PortfolioItem = ({id, name, description, tools, itemUrl, itemImg}) => {
    return(
        <>
        <div className="col-sm-12 col-md-3 m-2 btn btn-outline-info" id="portfolio-item">
            <div className="col-sm-12 py-2">
                <a href={itemUrl}>
                   <div className="portfolio-img">
                        <img className="card-img-top" src={itemImg} alt={name}/>
                   </div>
                </a>
            </div>
            <div className="col-sm-12 py-2">
                <p>{name}</p>
                <h4>{description}</h4>
                <p>Tools used: {tools}</p>
            </div>
        </div>
        </>
    );
}

export default PortfolioItem;