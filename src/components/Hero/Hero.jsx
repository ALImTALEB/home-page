import heroPic from "../../assets/fishing.png";
import heroPicMobile from "../../assets/fisherMobile.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div>
        <h1 className="hero-heading">
          Central Texas <br /> Fly Fishing
        </h1>
        <p className="hero-description">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <button>Get Started</button>
      </div>

      <figure className="figureWeb">
        <img src={heroPic} alt="A fisherman casting a fishing rod" />
      </figure>
      <figure className="figureMobile">
        <img src={heroPicMobile} alt="A fisherman casting a fishing rod" />
      </figure>
    </section>
  );
};

export default Hero;
