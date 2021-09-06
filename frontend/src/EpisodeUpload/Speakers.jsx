import React, { useEffect, useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";

function SpeakerTemplate(props) {
  const [Person, setPerson] = useState("");
  const [ProfileImage, setProfileImage] = useState(
    "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
  );
  const [OtherPerson, setOtherPerson] = useState("");
  const [OtherPersonPopover, setOtherPersonPopover] = useState(false);

  return (
    <div className={`${props.for}Upload`}>
      <b>{ props.for}</b>
      <span id="image-options">
        <img src={ProfileImage} alt={Person} />

        <div>
          <label htmlFor={`Lakshya${props.for}`}>
            Lakshya
            <input
              type="radio"
              name={props.for}
              id={`Lakshya${props.for}`}
              value={JSON.stringify({
                Name: "Lakshya Pratap Monga",
                ProfileImage:
                  "https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l_400x400.jpg",
              })}
              onInput={(e) => {
                setProfileImage(JSON.parse(e.target.value).ProfileImage);
                setPerson(JSON.parse(e.target.value).Name);
              }}
            />
          </label>
          <label htmlFor={`Shourya${props.for}`}>
            Shourya
            <input
              type="radio"
              name={props.for}
              id={`Shourya${props.for}`}
              value={JSON.stringify({
                Name: "Shourya Sethi",
                ProfileImage:
                  "https://github.com/ItsMeSkink/Quantomy/blob/master/Shourya%20Profile%20Image.jpeg?raw=true",
              })}
              onInput={(e) => {
                setPerson(JSON.parse(e.target.value).Name);
                setProfileImage(JSON.parse(e.target.value).ProfileImage);
              }}
            />
          </label>
          <label htmlFor={`Manan${props.for}`}>
            Manan
            <input
              type="radio"
              name={props.for}
              id={`Manan${props.for}`}
              value={JSON.stringify({
                Name: "Manan Sethi",
                ProfileImage:
                  "https://github.com/ItsMeSkink/Quantomy/blob/master/Manan%20Profile%20Image.jpg?raw=true",
              })}
              onInput={(e) => {
                setProfileImage(JSON.parse(e.target.value).ProfileImage);
                setPerson(JSON.parse(e.target.value).Name);
              }}
            />
          </label>
          <label
            htmlFor={`Other${props.for}`}
            id={`other${props.for}`.toLowerCase()}
            onClick={() => {
              setOtherPersonPopover(true);
            }}
          >
            Other
            <input type="radio" name="Speaker" id={`Other${props.for}`} value={JSON.stringify({
              Name: Person,
              ProfileImage: ProfileImage
            })} />
          </label>
          <Popover
            open={OtherPersonPopover}
            anchorEl={document.getElementById(
              `other${props.for}`.toLowerCase()
            )}
            onClose={() => {
              setOtherPersonPopover(false);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            classes={{
              paper: "OtherPersonInputs",
            }}
          >
            <input
              type="text"
              name={`Other${props.for}Name`}
              id={`Other${props.for}Name`}
              placeholder={`Other ${props.for} Name`}
              onInput={(e) => {
                setPerson(e.target.value)
              }}
            />
            <input
              type="url"
              name={`Other${props.for}ProfileImage`}
              id={`Other${props.for}ProfileImage`}
              placeholder={`Other ${props.for} Profile Image URL`}
              onInput={(e) => {
                setProfileImage(e.target.value)
              }}
            />
            <button onClick={() => {
              setTimeout(() => {
                setOtherPersonPopover(false)
              }, 100);
            }}>Select</button>
          </Popover>
        </div>
      </span>
    </div>
  );
}

export default function Speakers() {
  return (
    <div id="speaker">
      <SpeakerTemplate for="Speaker" />
      <SpeakerTemplate for="Host" />
    </div>
  );
}
