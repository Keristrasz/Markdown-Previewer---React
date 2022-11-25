import React from "react";
import "./App.css";

export default function ContentOfPreviewer({ textEditorContent }) {
  
  function myGreeting() {
    document.getElementById("content").innerHTML =
      marked.parse(textEditorContent);
      console.log("render")
  }
  const myTimeout = setTimeout(myGreeting, 100);

  return (
    <div>
      <div id="content">
        {marked.parse(textEditorContent)}
        {myTimeout}
      </div>
    </div>
  );
}
