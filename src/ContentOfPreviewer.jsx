import React from "react";
import "./App.css";

export default function ContentOfPreviewer({ textEditorContent}) {

  //Or we can use React.useRef hook, with setinnerHTML, its necessary to also use sanitizer  https://iq.js.org/questions/react/how-to-use-innerhtml-in-react
  
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: textEditorContent[1] }} id="content">
      </div>
    </div>
  );
}
