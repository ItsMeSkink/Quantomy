import React from "react";
import SpeakerTemplate from "./SpeakerTemplate";

export default function Speakers() {
  return (
    <div id="speakers">

      <title>Hosts and Speakers</title>
      <SpeakerTemplate
        Name="Lakshya Pratap Monga"
        Field="Physics"
        Instagram="lakshyamonga.io"
        Twitter="Lakshya_Monga"
        Info=' Self-Studying Science Communicator with an interest in Physics. Full
          Stack MERN Web Developer (HTML, CSS, JS, SCSS, ReactJS, ExpressJS,
          NodeJS, jQuery, MongoDB). Main interest in Cosmology and Quantum
          Mechanics.
          <br>
          <u> Presented his first paper, "The unintuitive universe inside
          a singularity of a Black Hole."</u>
          <br>
          He mentions his future endavours in the Episode, "Personal Future of
          Physics". <br>
           Unlike other Physicists who aim for Grand Unified Theory,
          Lakshya wants to unify Buisness with Physics so that it would easier
          for other Physicists to collaborate.'
        ProfilePicture="https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l_400x400.jpg"
      />
    </div>
  );
}
