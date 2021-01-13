import React from "react";
import CredentailItemsData from "./CredentialItemsData";
import CredentialItem from "./CredentialItem";
import "../styles/credentials.css";

const Credentials = () => {
    return(
        <>
        <div className="row" id="Credentials">
            
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