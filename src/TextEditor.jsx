import React from "react";
import "./App.css";

export default function TextEditor({ textEditorContent, setTextEditorContent }) {
  function changeText(e) {
    setTextEditorContent(e.target.value);
  }
  return (
    <main>
      <div>
        <h3>Text editor</h3>
        <hr />
        <textarea
          className="form-control"
          rows="33"
          value={textEditorContent}
          onChange={changeText}
        ></textarea>
      </div>
    </main>
  );
}
