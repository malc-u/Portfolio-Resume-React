import React from "react";
import Credentials from "../components/Credentials";
import Portfolio from "../components/Portfolio";

class Homepage extends React.Component {
  
 
  render() {
    return (
      <>
        <div className="page container-fluid">
          <div className="row pb-3">
            <div className="col-12 text-center p-3">
              <h1 className="p-3 text-info">Mal Calow-Uttley</h1>
              <h3>Junior Software Developer</h3>
            </div>
          </div>
          <Portfolio />
          <Credentials />

        </div>
      </>
    );
  }
}

export default Homepage;