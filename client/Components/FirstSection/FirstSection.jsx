
import React from 'react';
import "./FirstSection.scss";
import img1 from "../../assets/img1.jpg"



class FirstSection extends React.Component {
  render() {
    return (
       <div className="FirstSection">
           <div className="container col-lg-12 ">
              <div className="img-contain">
                <img src={img1} width="50%" alt=""/>
                <div className="right">
                    <div className="text">
                      <div className="title">
                        <h1>Tattoo Art</h1>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>

                </div>
                </div>

              </div>

           </div>

      </div>
    );
  }
}

export default FirstSection;
