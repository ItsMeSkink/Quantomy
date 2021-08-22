import React from "react";
import "./SpeakerTemplate.scss";
import "./Responsive.scss"

export default function SpeakerTemplate(props) {
  const Name = props.Name;
  const Instagram = props.Instagram;
  const Twitter = props.Twitter;
  const ProfilePicture = props.ProfilePicture;
  const Field = props.Field;
  const Info = props.Info;
  return (
    <div className="speaker">
      <div id="hostpic-socials">
        <div id="socials">
          <img
            src="https://image.flaticon.com/icons/png/512/87/87390.png"
            alt="Instagram"
            id="instagram"
            onClick={() => {
              window.location = `https://instagram.com/${Instagram}`;
            }}
          />
          <img
            src="https://img.icons8.com/ios/452/twitter--v1.png"
            alt="Twitter"
            id="twitter"
            onClick={() => {
              window.location = `https://twitter.com/${Twitter}`;
            }}
          />
        </div>
        <img src={ProfilePicture} alt="Host Picture" id="hostpic" />
      </div>

      <div id="info">
        <b>{Name} </b>
        <i>in the field of {Field}</i>
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: Info }}></div>
      </div>
    </div>
  );
}
