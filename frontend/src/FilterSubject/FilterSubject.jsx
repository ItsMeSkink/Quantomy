import React, { useState } from "react";
import "./FilterSubject.scss";
import Modal from "react-modal";
import $ from "jquery";

export default function FilterSubject(props) {
  return (
    <Modal
      isOpen={props.SubjectFilter}
      // isOpen={true}
      shouldCloseOnEsc={true}
      className="Subjects"
      ariaHideApp={false}
    >
      <img
        src="https://img.icons8.com/ios/452/physics.png"
        alt="Physics"
        id="Physics"
        onClick={() => {
          $(".episode:not(.Physics)").hide();
          $(".Physics").show();
        }}
      />
      <img
        src="https://static.thenounproject.com/png/84895-200.png"
        alt="Biology"
        id="Biology"
        onClick={() => {
          $(".episode:not(.Biology)").hide();
          $(".Biology").show();
        }}
      />
      <img
        src="https://static.thenounproject.com/png/866655-200.png"
        alt="Math"
        id="Math"
        onClick={() => {
          $(".episode:not(.Mathematics)").hide();
          $(".Mathematics").show();
        }}
      />

      <h1
        onClick={() => {
          $(".episode").show();
        }}
      >
        Show All
      </h1>
    </Modal>
  );
}
