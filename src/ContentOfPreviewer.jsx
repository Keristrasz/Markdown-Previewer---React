import React from "react";
import "./App.css";
import Terminal from "./Terminal.jsx";

export default function ContentOfPreviewer({ terminalContent }) {
  function myGreeting() {
    document.getElementById("content").innerHTML =
      marked.parse(terminalContent);
  }
  const myTimeout = setTimeout(myGreeting, 100);

  return (
    <div>
      <div id="content">
        {marked.parse(terminalContent)}
        {myTimeout}
      </div>
    </div>
  );
}
