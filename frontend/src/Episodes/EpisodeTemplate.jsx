import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./EpisodeTemplate.scss";
import $ from "jquery";
import "./Responsive.scss";
export default function EpisodeTemplate(props) {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [Host, setHost] = useState("");
  const [Speaker, setSpeaker] = useState("");
  const [Subject, SetSubject] = useState("");

  useEffect(() => {
    $("img#speaker, img#host").click(() => {
      window.location = "/hosts";
    });


    if (props.Subject === "Physics") {
      SetSubject("https://img.icons8.com/ios/452/physics.png");
    } else if (props.Subject === "Biology") {
      SetSubject("https://static.thenounproject.com/png/84895-200.png");
    } else if (props.Subject === "Mathematics") {
      SetSubject("https://static.thenounproject.com/png/866655-200.png");
    }
  }, []);
  return (
    <Parallax
      bgImage={props.BackgroundImage}
      strength={400}
      bgStyle={{
        width: "100%",
        height: "100vh",
        zIndex: "1",
      }}
      renderLayer={(e) => {
        setScrollPercentage(e);

        if (e > 1 || e === 1) {
          $(".episode").removeClass("currentScroll");
          $(`#episode${props.idNo}`).addClass("currentScroll");
        }
      }}
    >
      <div className={`episode ${props.Subject} `} id={`episode${props.idNo}`}>
        <img src={Subject} alt="" id="subjectstamp" />
        <div id="iconicline-speakers">
          <h1>"{props.Tagline}"</h1>
          <div id="speakers">
            <span>
              <b>Speaker</b>
              <img src={props.Speaker.ProfileImage} alt={props.Speaker.Name} id="host" />
            </span>
            <span>
              <b>Host</b>
              <img src={props.Host.ProfileImage} alt={props.Host.Name} id="speaker" />
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.Embed }} id="Embed"></div>
      </div>
    </Parallax>
  );
}
