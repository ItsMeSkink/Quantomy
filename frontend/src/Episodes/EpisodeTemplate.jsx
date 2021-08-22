import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./EpisodeTemplate.scss";
import $ from "jquery";
import "./Responsive.scss";
export default function EpisodeTemplate(props) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const a = $(".episode")[2];
    // console.log(a);

    if (props.Speaker === "Lakshya Pratap Monga") {
      $(`#episode${props.idNo} `+ "img#speaker").attr(
        "src",
        "https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l.jpg"
      );
    } else if (props.Speaker === "Shourya Sethi") {
      $(`#episode${props.idNo} `+ "img#speaker").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    } else if (props.Speaker === "Manan Sethi") {
      $(`#episode${props.idNo} `+ "img#speaker").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    }
    if (props.Host === "Lakshya Pratap Monga") {
      $(`#episode${props.idNo} `+ "img#host").attr(
        "src",
        "https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l.jpg"
      );
    } else if (props.Host === "Shourya Sethi") {
      $(`#episode${props.idNo} `+ "img#host").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    } else if (props.Host === "Manan Sethi") {
      $(`#episode${props.idNo} `+ "img#host").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    }

    if (props.Subject === "Physics") {
      $(`#episode${props.idNo} `+ "#subjectstamp").attr(
        "src",
        "https://img.icons8.com/ios/452/physics.png"
      );
    } else if (props.Subject === "Biology") {
      $(`#episode${props.idNo} `+ "#subjectstamp").attr(
        "src",
        "https://static.thenounproject.com/png/84895-200.png"
      );
    } else if (props.Subject === "Mathematics") {
      $(`#episode${props.idNo} `+ "#subjectstamp").attr(
        "src",
        "https://static.thenounproject.com/png/866655-200.png"
      );
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
          $(`#episode${props.idNo}`).addClass('currentScroll')
        }
      }}
    >
      <div className={`episode ${props.Subject} `} id={`episode${props.idNo}`}>
        <img src="" alt="" id="subjectstamp" />
        <div id="iconicline-speakers">
          <h1>"{props.Tagline}"</h1>
          <div id="speakers">
            <span>
              <b>Speaker</b>
              <img src="" alt={props.Speaker} id="host" />
            </span>
            <span>
              <b>Host</b>
              <img src="" alt={props.Host} id="speaker" />
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.Embed }} id="Embed"></div>
      </div>
    </Parallax>
  );
}
