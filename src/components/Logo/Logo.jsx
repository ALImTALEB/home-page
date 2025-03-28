import "./Logo.css";
import logo from "../../assets/fishLogo.png";

const Logo = () => {
  return (
    <figure className="logo">
      <img src={logo} alt="Company Logo" />
      <figcaption className="caption">Central Texas Fly Fishing</figcaption>
    </figure>
  );
};

export default Logo;
