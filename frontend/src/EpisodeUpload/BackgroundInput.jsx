import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function BackgroundInput() {
  const [BgImageURL, setBgImageURL] = useState("");

  return (
    <div id="bginput">
      <input
        type="url"
        name="bgImageInput"
        id="bgImageInput"
        placeholder="Background Image URL"
        onInput={() => {
          setBgImageURL($("#bgImageInput").val());
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            $("#episodeupload .react-parallax-bgimage").attr("src", BgImageURL);
          }
        }}
      />
      <span
        class="material-icons-round"
        id="confirm"
        onClick={() => {
          $("#episodeupload .react-parallax-bgimage").attr("src", BgImageURL);
        }}
      >
        done
      </span>
    </div>
  );
}
