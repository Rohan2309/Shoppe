import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Shoppe</h1>
        <p>Quality is our Topmost Priority</p>

        <p>Copyrights 2021 &copy; Rohan Roy Chowdhury</p>
      </div>

      <div className="rightFooter">
        <h4>Let's Connect</h4>
        <a href="http://instagram.com/rohan._23_">Instagram</a>
        <a href="https://www.linkedin.com/in/rohan-roy-chowdhury-884619187/">Linkedin</a>
        <a href="http://github.com/Rohan2309">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
