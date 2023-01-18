import React from "react";
import "./App.css";

export default function TextEditor({ textEditorContent, setTextEditorContent }) {

  let changePreviewer = (e) => {

    setTextEditorContent([e.target.value, marked.parse(e.target.value)])
  }



  return (
    <main>
      <div>
        <h3>Text editor</h3>
        <hr />
        <textarea
          className="form-control"
          rows="33"
          value={textEditorContent[0]}
          onChange={changePreviewer}
        ></textarea>
      </div>
    </main>
  );
}
