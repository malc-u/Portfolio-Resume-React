import React from "react";
import CredentailItemsData from "./CredentialItemsData";
import CredentialItem from "./CredentialItem";
import "../styles/credentials.css";

const Credentials = () => {
    return(
        <>
        <hr className="hr"/>
        <div className="row py-3 justify-content-center mx-0">
            <h4>Credentials:</h4>
        </div>
        <div className="row py-3 justify-content-center mx-0" id="Credentials">
            
            {CredentailItemsData.map(
                    ({id, type, name, itemUrl, date, body}) => {
                        return (
                            <CredentialItem 
                            id={id}
                            name={name}
                            itemUrl={itemUrl}
                            type={type}
                            date={date}
                            body={body}
                            />
                        );
                    }
                )}


        </div>

        </>
    )
}

export default Credentials;