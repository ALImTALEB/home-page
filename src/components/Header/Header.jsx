import Hero from "../Hero/Hero";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <Logo />
        <Nav />
      </div>
      <Hero />
    </header>
  );
};

export default Header;
