import React from "react";
import "./App.css";
import Previewer from "./Previewer.jsx";
import Terminal from "./Terminal.jsx";
import ContentOfPreviewer from "./ContentOfPreviewer";
import { content } from "./content.js";

export default function App() {
  const [terminalContent, setTerminalContent] = React.useState(content);
  

  return (
    <main>
      <div className="row">
        <div className="col-6">
          <Terminal
            terminalContent={terminalContent}
            setTerminalContent={setTerminalContent}
          />
        </div>
        <div className="col-6">
          <Previewer terminalContent={terminalContent} />
        </div>
      </div>
    </main>
  );
}
