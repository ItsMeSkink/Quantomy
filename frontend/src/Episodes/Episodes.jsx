import EpisodeTemplate from "./EpisodeTemplate";
import $ from "jquery";
import React, { useEffect, useState } from "react";

export default function Episodes() {
  const [episodeData, setEpisodeData] = useState([]);

  useEffect(() => {
    fetch("/episodes")
      .then((res) => res.json())
      .then((data) => {
        setEpisodeData(data);
      });
  }, []);

  return (
    <div id="episodes">
      <title>Home - Episodes</title>
      {episodeData.map((item, index) => {
        return (
          <EpisodeTemplate
            BackgroundImage={item.BackgroundImage}
            Tagline={item.Quoteline}
            Embed={item.EmbedString}
            Speaker={item.Speaker}
            Host={item.Host}
            Subject={item.Subject}
            idNo={index + 1}
          />
        );
      })}
    </div>
  );
}
