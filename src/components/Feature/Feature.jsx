import arrowUp from "../../assets/arrow-up.png";
import fishesPic from "../../assets/fishesFeature.png";
import back1 from "../../assets/backgroundimg1.png";
import back2 from "../../assets/backgroundimg2.png";
import back3 from "../../assets/backgroundimg3.png";

import "./Feature.css";

const Feature = () => {
  return (
    <>
      <section className="feature-section">
        <h2 className="feature-heading">Featured Options</h2>
        <div className="feature-header">
          <p className="feature-subtitle">Explore Fly Fishing</p>
          <img src={arrowUp} alt="Arrow up icon" className="feature-icon" />
        </div>

        <figure className="feature-image-container">
          <img
            src={fishesPic}
            alt="Fishes in water"
            className="feature-image"
          />
          <div className="feature-content">
            <h3 className="feature-title">Explore Fly Fishing</h3>
            <p className="feature-description">
              Proin nibh nisl condimentum id venenatis a condimentum
              <br /> vitae sapien. Tellus in metus vulputate eu sc
            </p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>
        </figure>
        <div className="feature-header">
          <p className="feature-subtitle">Fly Fishing Experiences</p>
          <img src={arrowUp} alt="Arrow up icon" className="feature-icon" />
        </div>
        <div className="feature-header">
          <p className="feature-subtitle">Gear Up and Catch More</p>
          <img src={arrowUp} alt="Arrow up icon" className="feature-icon" />
        </div>
      </section>

      <section className="cardsContainer">
        <div className="feature-containerMobile">
          <h2 className="feature-headingMobile">Featured Options</h2>

          <figure className="feature-cardMobile">
            <img
              src={back1}
              alt="Fishes swimming"
              className="feature-imageMobile"
            />
            <div className="feature-contentMobile">
              <h3 className="feature-titleMobile">Explore Fly Fishing</h3>
              <p className="feature-description">
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc
              </p>
              <a href="#" className="feature-button">
                Learn more
              </a>
            </div>
          </figure>
        </div>

        <div className="feature-containerMobile">
          <figure className="feature-cardMobile">
            <img
              src={back2}
              alt="Fishes swimming"
              className="feature-imageMobile"
            />
            <div className="feature-contentMobile">
              <h3 className="feature-titleMobile">Fly Fishing Experiences</h3>
              <p className="feature-description">
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc
              </p>
              <a href="#" className="feature-button">
                Learn more
              </a>
            </div>
          </figure>
        </div>

        <div className="feature-containerMobile">
          <figure className="feature-cardMobile">
            <img
              src={back3}
              alt="Fishes swimming"
              className="feature-imageMobile"
            />
            <div className="feature-contentMobile">
              <h3 className="feature-titleMobile">Gear Up and Catch More</h3>
              <p className="feature-description">
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc
              </p>
              <a href="#" className="feature-button">
                Learn more
              </a>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Feature;
