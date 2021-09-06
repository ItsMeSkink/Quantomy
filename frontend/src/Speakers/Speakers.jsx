import React from "react";
import SpeakerTemplate from "./SpeakerTemplate";

export default function Speakers() {
  return (
    <div id="speakers">
      <title>Hosts and Speakers</title>
      <SpeakerTemplate
        Name="Lakshya Pratap "
        Field="Physics"
        Instagram="lakshyamonga.io"
        Twitter="Lakshya_Monga"
        Info="Self-Studying Science Communicator with an interest in Physics. Full
          Stack MERN Web Developer (HTML, CSS, JS, SCSS, ReactJS, ExpressJS,
          NodeJS, jQuery, MongoDB) (Developer of this Website also). Main interest in Cosmology and Quantum
          Mechanics.
          Unlike other Physicists who aim for Grand Unified Theory,
          Lakshya wants to unify Buisness with Physics so that it would easier
          for other Physicists to collaborate."
        ProfilePicture="https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l_400x400.jpg"
      />
      <SpeakerTemplate
        Name="Shourya Sethi"
        Field="Biology"
        Instagram="shouryasethii"
        Twitter="QuantomyPodcast"
        Info=""
        ProfilePicture="https://github.com/ItsMeSkink/Quantomy/blob/master/canva-photo-editor.png?raw=true"
      />
      <SpeakerTemplate
        Name="Manan Sethi"
        Field="Mathematics"
        Instagram="mananxsethi"
        Twitter="QuantomyPodcast"
        Info=""
        ProfilePicture="https://github.com/ItsMeSkink/Quantomy/blob/master/Manan%20Profile%20Image%201.jpg?raw=true"
      />
      {/* <SpeakerTemplate
        Name="Manan Sethi"
        Field="Mathematics"
        Instagram="mananxsethi"
        Twitter="QuantomyPodcast"
        Info=''
        ProfilePicture="https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l_400x400.jpg"
      /> */}
    </div>
  );
}
