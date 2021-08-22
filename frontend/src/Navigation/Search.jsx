import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function Search() {
  useEffect(() => {
    $("#navigation span input").css("display", "none");

    $("#navigation span img").click(() => {
      $("#navigation span input").css("display", "inline-block");
      $("#navigation span input").focus();
      $("#navigation span img").addClass("pressed");
    });
  }, []);

  return (
    <span>
      <input type="text" name="Search" id="Search" />
      <img
        src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
        alt="Search"
        id="search"
      />
    </span>
  );
}
