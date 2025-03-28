import story1 from "../../assets/story1.png";

import "./Story.css";

const Story = () => {
  return (
    <section>
      <div className="firstContainer">
        <h2>Member stories</h2>
        <div className="containerr">
          <div className="left">
            <div className="cardContainer">
              <figure>
                <img className="img" src={story1} alt="" />
              </figure>
              <div className="details">
                <h3 className="title">John's Story</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat{" "}
                </p>
                <button className="readMore">Read more</button>
              </div>
            </div>
            <div>
              <div className="cardContainer">
                <figure>
                  <img className="img" src={story1} alt="" />
                </figure>
                <div className="details">
                  <h3 className="title">John's Story</h3>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat{" "}
                  </p>
                  <button className="readMore">Read more</button>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="cardContainer">
              <figure>
                <img className="img" src={story1} alt="" />
              </figure>
              <div className="details">
                <h3 className="title">John's Story</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat{" "}
                </p>
                <button className="readMore">Read more</button>
              </div>
            </div>
            <div className="cardContainer">
              <figure>
                <img className="img" src={story1} alt="" />
              </figure>
              <div className="details">
                <h3 className="title">John's Story</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat{" "}
                </p>
                <button className="readMore">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
