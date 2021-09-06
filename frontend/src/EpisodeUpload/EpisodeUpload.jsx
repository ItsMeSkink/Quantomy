import React, { useState, useEffect } from "react";
import "./EpisodeUpload.scss";
import { Parallax } from "react-parallax";
import $ from "jquery";
import BackgroundInput from "./BackgroundInput";
import Embedding from "./Embedding";
import Quoteline from "./Quoteline";
import Speakers from "./Speakers";
import SubjectChose from "./SubjectChose";
import Authentication from "../Authentication/Authentication";

export default function EpisodeUpload() {
  const [authentication, setAuthentication] = useState(false);
  setTimeout(() => {
    $("#tagline").remove();
    $("#homebutton").remove();
    $("#navigation").remove();

    function authenticate() {
      fetch("/authentication", {
        method: "POST",
        body: $("#Authentication input").val(),
      })
        .then((res) => res.json())
        .then((confirmation) => {
          setAuthentication(confirmation);

          if (confirmation === false) {
            $("#Authentication input").css("border", "10px solid red");
          } else if (confirmation === true) {
            $("#Upload").click(() => {
              const speaker = $("input#OtherSpeaker").val();
              const host = $("input#OtherHost").val();
              const embedcode = $("#Embedding div").html();
              const bgimage = $("#episodeupload .react-parallax-bgimage").attr(
                "src"
              );
              const quoteline = $("#QuotlineShow").html();
              const subject = $("#subjectchose label input:checked").val();

              const episode = {
                Speaker: speaker,
                Host: host,
                EmbedCode: embedcode,
                BackgroundImage: bgimage,
                QuoteLine: quoteline,
                Subject: subject,
              };

              console.log(episode);

              fetch("/uploadepisode", {
                method: "POST",
                body: JSON.stringify(episode),
              });

              setTimeout(() => {
                window.location = "/";
              }, 100);
            });
          }
        });
    }

    $("#Authentication input").keydown((e) => {
      if (e.key === "Enter") {
        authenticate();
      }
    });
    $("#Authentication button").click(() => {
      authenticate();
    });
  }, 1);

  return (
    <>
      <div id="episodeupload">
        <title>Episode Upload</title>
        <Parallax
          bgImage="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          strength={400}
          bgImageStyle={{
            height: "100vh",
            width: "100vw",
          }}
        >
          {authentication === true ? (
            <div id="EpisodeUpload">
              <span class="material-icons-round" id="Upload">
                publish
              </span>
              <div id="quoteline-speakers">
                <Quoteline />
                <Speakers />
              </div>

              <Embedding />
              <BackgroundInput />
              <SubjectChose />
            </div>
          ) : (
            <Authentication />
          )}
        </Parallax>
      </div>
    </>
  );
}
