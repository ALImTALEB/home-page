import "./Nav.css";

import HamburgerIcon from "../../assets/hamburger.png";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="hamburger-container">
        <img
          src={HamburgerIcon}
          alt="Hamburger Menu"
          className="hamburger-icon"
        />
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
