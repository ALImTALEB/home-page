import logo from "../../assets/fishLogo.png";

import "./Footer.css";

import instagram from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="navv">
          <figure className="logo">
            <img src={logo} alt="Company Logo" />
          </figure>
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-linkk">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-linkk">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-linkk">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-linkk">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="contact">
          <img className="social" src={facebook} />
          <img className="social" src={instagram} />
          <img className="social" src={linkedin} />
        </div>
      </div>
      <p className="cp">
        © 2024 Central Texas Fly Fishing All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
