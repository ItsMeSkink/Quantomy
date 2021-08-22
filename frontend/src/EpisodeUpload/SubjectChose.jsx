import React from "react";
import $ from "jquery";

export default function SubjectChose() {
  setInterval(() => {
    const subject = $("#subjectchose label input:checked").closest($("label"));

    $('#subjectchose label').removeClass('chosensubject')
    subject.addClass('chosensubject')
    

  }, 1);

  return (
    <div id="subjectchose">
      <label htmlFor="physics">
        <img
          src="https://img.icons8.com/ios/452/physics.png"
          alt="Physics"
          id="Physics"
        />
        <input type="radio" name="Subject" id="physics" value="Physics" />
      </label>
      <label htmlFor="biology">
        <img
          src="https://static.thenounproject.com/png/84895-200.png"
          alt="Biology"
          id="Biology"
        />
        <input type="radio" name="Subject" id="biology" value="Biology" />
      </label>
      <label htmlFor="mathematics">
        <img
          src="https://static.thenounproject.com/png/866655-200.png"
          alt="Math"
          id="Math"
        />
        <input
          type="radio"
          name="Subject"
          id="mathematics"
          value="Mathematics"
        />
      </label>
    </div>
  );
}
