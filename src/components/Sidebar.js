import React from "react";
import SidebarItemsData from "./SidebarItemsData";
import  SidebarItem from "./SidebarItem";
import "../styles/sidebar.css";

const Sidebar = () => {

  return (
    <>
      <div id="sidebar">
 
          {SidebarItemsData.map(
                ({ id, name, itemUrl, itemIcon }) => {
                  return(
                    <SidebarItem
                    key={id}
                    name={name}
                    itemUrl={itemUrl}
                    itemIcon={itemIcon}
                    />
                  );
                }
              )}

      </div>
    </>
  );
}


export default Sidebar;