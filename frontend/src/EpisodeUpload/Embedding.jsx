import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function Embedding() {
  const [EmbedCode, setEmbedCode] = useState("");
  const [ShowEmbedInput, setShowEmbedInput] = useState(true);
  return (
    <div
      id="Embedding"
      onMouseEnter={() => {
        setShowEmbedInput(true);
      }}
      onMouseLeave={() => {
        if ($("#EmbedCode").val() !== "") {
          setShowEmbedInput(false);
        }
      }}
    >
      {ShowEmbedInput === true ? (
        <textarea
          name="EmbedCode"
          id="EmbedCode"
          placeholder="Embed Code"
          onInput={() => {
            setEmbedCode($("#EmbedCode").val());
          }}
          value={EmbedCode}
        ></textarea>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: EmbedCode }}></div>
      )}
    </div>
  );
}
