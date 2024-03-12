import "./Footer.scss";
import React, { Component } from "react";
import siteLogo from "../../assets/logo/Logo.jpeg";
import facebook from "../../assets/logo/Facebook.jpeg";
import instagram from "../../assets/logo/Instagram.jpeg";
import twitter from "../../assets/logo/Twitter.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="App--footer">
        <hr />
        <div className="App--footer__text">
          <h4>@ 2024 Doggo Beacon. All Rights Reserved.</h4>
        </div>
        <div className="App--footer__iconbox">
          <div className="App--footer__logo">
            <img className="logoImageFooter" src={siteLogo} alt="siteLog" />
          </div>
          <div>
            <h3 className="subFooter"> FOLLOW US</h3>
            <div className="App--footer__logo">
              <a href="https://www.facebook.com/">
                <img className="logoImage" src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img className="logoImage" src={instagram} alt="instagram" />
              </a>
              <a href="https://twitter.com/">
                <img className="logoImage" src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="App--footer__text--info">
          <p>Contact US: +1 123 456 7890</p>
          <p>Email: support@dogbeacon.ca</p>
        </div>
        <div className="App--footer__text--bottom">
          <p>Terms & Condition</p>
          <p>Careers</p>
          <p>Privacy</p>
          <p>Coupons</p>
        </div>
      </div>
    );
  }
}
export default Footer;
