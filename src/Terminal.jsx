import React from "react";
import "./App.css";

export default function Terminal({ terminalContent, setTerminalContent }) {
  function changeText(e) {
    setTerminalContent(e.target.value);
  }
  return (
    <main>
      <div>
        <h3>Terminal</h3>
        <hr />
        <textarea
          className="form-control"
          rows="33"
          value={terminalContent}
          onChange={changeText}
        ></textarea>
      </div>
    </main>
  );
}
