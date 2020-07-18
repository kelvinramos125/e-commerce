import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-item">
          <li className="logoname__text">
            <a className="logo-anchor" href="index.html">
              <img className="logo" src="logo.png" alt="GM-logo" />
            </a>
            <a className="logoname__text" href="index.html">
              Game World
            </a>
          </li>
          <li>
            <a href="product.html">Product</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </nav>

      <section>
        <div className="container">
          <div className="slideshow-container">
            <div className="mySlides fade  img1">
              <div className="numbertext">1 / 4</div>
              <h1 className="slide__text">Welcome Gamer</h1>
            </div>

            <div className="mySlides fade  img2">
              <div className="numbertext">2 / 4</div>
              <h1 className="slide__text">Welcome Gamer</h1>
            </div>

            <div className="mySlides fade  img3">
              <div className="numbertext">3 / 4</div>
              <div className="slide__text">Welcome Gamer</div>
            </div>

            <div className="mySlides fade  img4">
              <div className="numbertext">4 / 4</div>
              <div className="slide__text">Welcome Gamer</div>
            </div>

            {/* <!-- Next and previous buttons --> */}
            <a className="prev" onclick="plusSlides(-1)">
              &#10094;
            </a>
            <a className="next" onclick="plusSlides(1)">
              &#10095;
            </a>
          </div>
          <br />

          {/* <!-- The dots/circles --> */}
          <div style={{ textalign: "center" }}>
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            <span className="dot" onclick="currentSlide(4)"></span>
          </div>
        </div>

        <div className="overview">
          <div className="ps4-gamer">
            <p className="slogan">"GREATNESS AWAITS"</p>
          </div>
          <div className="divider"></div>
          <div className="xbox-gamer">
            <p className="slogan">"JUMP AHEAD"</p>
          </div>
        </div>

        <div className="button-look">
          <a className="button" href="product.html">
            Get Started
          </a>
        </div>

<div className="footer">
        <a class="logo-anchor" href="index.html">
          <img class="logo" src="logo.png" alt="GM-logo"></a>

      <div class = "social-container">
        <a href = "https://instagram.com"><img class = "instagram" src = "instagram.png" alt =  "instagram logo"></a>
        <a href = "https://facebook.com"><img class = "facebook" src = "facebook.png" alt =  "facebook logo"></a>
      </div>

      <p class="copyright">GameWorld &copy; 2020, All Right Reserved</p>
      </div>

    </div>
  );
}

export default App;
