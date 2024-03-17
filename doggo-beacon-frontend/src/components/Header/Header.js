import "./Header.scss";
import React from "react";
import Lottie from "react-lottie";

import siteLogo from "../../assets/logo/Logo.jpeg";
import animationData from "../../lotties/Animation - PAW.json";
import heroPic from "../../assets/images/HeroPict.jpg";

function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="App--header">
        <div className="App--header__logo">
          <img className="logoImage" src={siteLogo} alt="siteLog" />
        </div>
        <div className="App--header__text">
          <h1>Doggo Beacon</h1>
        </div>
        <div>
          <Lottie options={defaultOptions} height={100} width={100} />
        </div>
      </div>
      <div className="App--hero">
        <img className="heroImage" src={heroPic} alt="dognose" />
      </div>
      <hr />
    </div>
  );
}

export default Header;
