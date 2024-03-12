import "./Header.scss";
import React, { Component } from "react";
import siteLogo from "../../assets/logo/Logo.jpeg";
import menuButton from "../../assets/icons/Vector.png";
import heroPic from "../../assets/images/HeroPict.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App--header">
          <div className="App--header__logo">
            <img className="logoImage" src={siteLogo} alt="siteLog" />
          </div>
          <div className="App--header__text">
            <h1>Doggo Beacon</h1>
          </div>
          <div className="App--header__menu">
            <img className="menu" src={menuButton} alt="Menu" />
          </div>
        </div>
        <div className="App--hero">
          <img className="heroImage" src={heroPic} alt="dognose" />
        </div>
        <hr />
      </div>
    );
  }
}
export default Header;
