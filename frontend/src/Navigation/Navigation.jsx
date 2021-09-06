import React, { useState } from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import Search from "./Search";
import FilterSubject from "../FilterSubject/FilterSubject";
import $ from "jquery";

export default function Navigation() {
  const [SubjectFilter, setSubjectFilter] = useState(false);

  setTimeout(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setSubjectFilter(false);
      }
    });
    $(".Subjects").click(() => {
      setTimeout(() => {
        setSubjectFilter(false);
      }, 1);
    });
  }, 100);

  return (
    <div id="navigation">
      <FilterSubject SubjectFilter={SubjectFilter} />
      <img
        src="https://github.com/ItsMeSkink/Quantomy/blob/master/Quantomy%20Subjects.png?raw=true"
        alt="Parent Subjects"
        id="ParentSubjects"
        onClick={() => {
          if (SubjectFilter === false) {
            setSubjectFilter(true);
          } else if (SubjectFilter === true) {
            setSubjectFilter(false);
          }
        }}
      />

      <Link to="/hosts">
        <img
          src="https://www.kindpng.com/picc/m/47-474987_com-locutor-png-speaker-icon-transparent-png.png"
          alt="Speakers"
          // id="speaker"
        />
      </Link>
      {/* <Search /> */}
      <Link to="/about">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/About_icon_%28The_Noun_Project%29.svg/1200px-About_icon_%28The_Noun_Project%29.svg.png"
          alt="About"
          id="about"
        />
      </Link>
      <img
        src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png"
        alt="Discord"
        id="discord"
        onClick={() => {
          window.open("https://discord.gg/SyKQUApYgj", "_blank");
        }}
      />
    </div>
  );
}
