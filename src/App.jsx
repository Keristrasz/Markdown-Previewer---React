import React from "react";
import "./App.css";
import Previewer from "./Previewer.jsx";
import TextEditor from "./TextEditor.jsx";
import { content } from "./content.js";

export default function App() {
  const [textEditorContent, setTextEditorContent] = React.useState(content);

  return (
    <main>
      <div className="row">
        <div className="col-6">
          <TextEditor
            textEditorContent={textEditorContent}
            setTextEditorContent={setTextEditorContent}
          />
        </div>
        <div className="col-6">
          <Previewer textEditorContent={textEditorContent} />
        </div>
      </div>
    </main>
  );
}
