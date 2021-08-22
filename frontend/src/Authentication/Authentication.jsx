import React from "react";
import "./Authentication.scss";

export default function Authentication(props) {
  return (
    <div id="Authentication">
      <input type="password"  placeholder="Password" />
      <button>Authenticate</button>
    </div>
  );
}
