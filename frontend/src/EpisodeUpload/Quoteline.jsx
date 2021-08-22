import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function Quoteline() {
  const [ShowQuotline, setShowQuotline] = useState(true);
  const [Quotline, setQuotline] = useState("");

  return (
    <div
      id="quoteline"
      onMouseEnter={() => {
        setShowQuotline(true);
      }}
      onMouseLeave={() => {
        if ($("#QuotlineInput").val() !== "") {
          setShowQuotline(false);
        }
      }}
    >
      {ShowQuotline === true ? (
        <textarea
          placeholder="''Episode Quote''"
          maxlength={65}
          name="Quotline"
          id="QuotlineInput"
          onInput={() => {
            setQuotline($("#QuotlineInput").val());
          }}
          value={Quotline}
        >
          {" "}
        </textarea>
      ) : (
        <h1 id="QuotlineShow">{Quotline}</h1>
      )}
    </div>
  );
}
