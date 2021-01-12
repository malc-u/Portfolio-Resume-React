import React from "react";

const SidebarItem = ({id, name, itemUrl, itemIcon}) => {
    return(
            <div className="text-center sidebar-item">
                <a href={itemUrl} target="_blank" rel="noopener noreferrer">
                   <i className={itemIcon}></i>
                </a>
            </div>
    );
}

export default SidebarItem;