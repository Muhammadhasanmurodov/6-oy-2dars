import Facebook from "../assets/Facebook (2).svg";
import Twitter from "../assets/Twitter (2).svg";
import Instagram from "../assets/Instagram (2).svg";


export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container footer-container">
          <div className="logoEnds">
            <h1>audiophile</h1>
            <ul className="list">
              <li>Home</li>
              <li>HEADPHONES</li>
              <li>SPEAKERS</li>
              <li>EARPHONES</li>
            </ul>
          </div>

          <div className="description-media">
            <div className="description-end">
              <p className="about">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <h3 className="detail">Copyright 2021. All Rights Reserved</h3>
            </div>

            <div className="media">
             <img src={Facebook} alt="Facebook" />
             <img src={Twitter} alt="Twitter" />
             <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
