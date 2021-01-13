import React from "react";

const CredentialItem = ({id, type, name, itemUrl, date, body}) => {
    return (
        <>
        <div className="col-sm-6 col-md-3 card">
            <div className="text-center card-body">
                <p className="small">{type}</p>
                <a className="btn btn-outline-info my-2" href={itemUrl} target="_blank" rel="noopener noreferrer">{name}</a>
                <p className="small">{body} - {date}</p>

            </div>
        </div>
        </>
    )
}

export default CredentialItem;