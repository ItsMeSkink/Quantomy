import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function Speakers() {
  const [speaker, setSpeaker] = useState("");

  setTimeout(() => {
    $("#speakerchose span label input").on("input", (e) => {
      setSpeaker(e.target.value);
    });
  }, 1);

  useEffect(() => {
    if (speaker === "Lakshya Pratap Monga") {
      $("img#speaker").attr(
        "src",
        "https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l.jpg"
      );
    } else if (speaker === "Shourya Sethi") {
      $("img#speaker").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    } else if (speaker === "Manan Sethi") {
      $("img#speaker").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    }
  }, [speaker]);
  // ---------------

  const [host, setHost] = useState("");

  setTimeout(() => {
    $("#hostchose span label input").on("input", (e) => {
      setHost(e.target.value);
    });
  }, 1);

  useEffect(() => {
    if (host === "Lakshya Pratap Monga") {
      $("img#host").attr(
        "src",
        "https://pbs.twimg.com/profile_images/1223955790144274432/T0jxtR0l.jpg"
      );
    } else if (host === "Shourya Sethi") {
      $("img#host").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    } else if (host === "Manan Sethi") {
      $("img#host").attr(
        "src",
        "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      );
    }
  }, [host]);

  setTimeout(() => {
    $("#speakerchose span").mouseenter(() => {
      $("#speakerchose span").css("filter", "opacity(1)");
    });
    $("#speakerchose span").mouseleave(() => {
      if (speaker !== "") {
        $("#speakerchose span").css("filter", "opacity(0)");
      }
    });
    $("#hostchose span").mouseenter(() => {
      $("#hostchose span").css("filter", "opacity(1)");
    });
    $("#hostchose span").mouseleave(() => {
      if (host !== "") {
        $("#hostchose span").css("filter", "opacity(0)");
      }
    });
  }, 1);
  return (
    <div id="speakers">
      <span id="speakerchose">
        <b>Speaker</b>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
          alt=""
          id="speaker"
        />
        <span>
          <label htmlFor="Lakshya1">
            Lakshya
            <input
              type="radio"
              name="Speaker"
              id="Lakshya1"
              value="Lakshya Pratap Monga"
            />
          </label>
          <label htmlFor="Shourya1">
            Shourya
            <input
              type="radio"
              name="Speaker"
              id="Shourya1"
              value="Shourya Sethi"
            />
          </label>
          <label htmlFor="Manan1">
            Manan
            <input
              type="radio"
              name="Speaker"
              id="Manan1"
              value="Manan Sethi"
            />
          </label>
          <label htmlFor="Other1">
            Other
            <input type="radio" name="Speaker" id="Other1" value="Other1" />
          </label>
        </span>
      </span>
      <span id="hostchose">
        <b>Host</b>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
          alt=""
          id="host"
        />
        <span>
          <label htmlFor="Lakshya2">
            Lakshya
            <input
              type="radio"
              name="Host"
              id="Lakshya2"
              value="Lakshya Pratap Monga"
            />
          </label>
          <label htmlFor="Shourya2">
            Shourya
            <input
              type="radio"
              name="Host"
              id="Shourya2"
              value="Shourya Sethi"
            />
          </label>
          <label htmlFor="Manan2">
            Manan
            <input type="radio" name="Host" id="Manan2" value="Manan Sethi" />
          </label>
          <label htmlFor="Other2">
            Other
            <input type="radio" name="Host" id="Other2" value="Other2" />
          </label>
        </span>
      </span>
    </div>
  );
}
