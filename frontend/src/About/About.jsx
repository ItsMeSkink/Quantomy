import React from "react";
import "./About.scss";
import "./Responsive.scss";
export default function About() {
  return (
    <div id="About">
      <title>About</title>
      <div id="instagram-art-twitter">
        <img
          src="https://img.icons8.com/metro/452/instagram-new.png"
          alt="Instagram"
          id="instagram"
          className="Socials"
          onClick={() => {
            window.location = "https://instagram.com/quantomypodcast";
          }}
        />

        <img
          src="https://github.com/ItsMeSkink/Quantomy/blob/master/Quantomy%20Logo2%20-%20Copy%20(2).png?raw=true"
          alt="Quantomy Podcast"
        />

        <img
          src="https://cdn.icon-icons.com/icons2/726/PNG/512/TWITTER_icon-icons.com_62686.png"
          alt="Twitter"
          id="twitter"
          className="Socials"
          onClick={() => {
            window.location = "https://twitter.com/QuantomyPodcast";
          }}
        />
      </div>
      <div id="instagram-twitter-alt">
        <img
          src="https://img.icons8.com/metro/452/instagram-new.png"
          alt="Instagram"
          id="instagram"
          className="Socials"
          onClick={() => {
            window.location = "https://instagram.com/quantomypodcast";
          }}
        />

        <img
          src="https://cdn.icon-icons.com/icons2/726/PNG/512/TWITTER_icon-icons.com_62686.png"
          alt="Twitter"
          id="twitter"
          className="Socials"
          onClick={() => {
            window.location = "https://twitter.com/QuantomyPodcast";
          }}
        />
        
      </div>

      <b>
        Our aim through this podcast is to discuss not answers in science but
        questions more that would bring us one-step closer to demystify the
        secrets of this universe.
        <br />
        <br />
        The name, "Quantomy" signifies everything ranging from the fundamental
        level of our universe (Quantum) to the Astronomical Level (Astronomy).
        We tend to explain curious topics within this level and sometimes also
        explore the possibilites beyond it.
        <br />
        <br />
        Our unified mission is to create curosity among people regarding Science
        and inspire people to help the human race to progress through the field
        of Science. We would love to see people being discovering their curosity
        and pursuing it. Happy Thinking.
      </b>
    </div>
  );
}
