import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Speakers from "./Speakers/Speakers";
import About from "./About/About";
import Navigation from "./Navigation/Navigation";
import Episodes from "./Episodes/Episodes";
import $ from "jquery";
import EpisodeUpload from "./EpisodeUpload/EpisodeUpload";
import "./AppResponsive.scss"

export default function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let coordinates = $("#tagline")[0].getBoundingClientRect();
      coordinates =
        Math.round(
          $("#tagline")[0].offsetTop -
            $("#tagline")[0].getBoundingClientRect().y
        ) + 1;

      coordinates = (400 / coordinates) * 10;

      $("#tagline")[0].style.filter = `opacity(${coordinates}%)`;
    });
  }, []);

  return (
    <Router>
      <div id="home">
        <Link to="/" id="homebutton">
          <img
            src="https://github.com/ItsMeSkink/Quantomy/blob/master/QuantomyLogoPNG.png?raw=true"
            alt="Quantomy"
            id="quantomylogo"
          />
        </Link>

        <Navigation />
        <p id="tagline">“Explaining the Complicated in Layman..”</p>

        <Route exact path="/">
          <Episodes />
        </Route>
        <Route exact path="/hosts">
          <Speakers />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/upload">
          <EpisodeUpload />
        </Route>
      </div>
    </Router>
  );
}
// https://discord.gg/SyKQUApYgj
