import React from 'react'
import './App.css'
import ContentOfPreviewer from './ContentOfPreviewer'


export default function Previewer({terminalContent}) {
  return (
    <main>
      <h3>Previewer</h3>
      <hr />
      <container id="preview">
        <ContentOfPreviewer terminalContent={terminalContent}/>
      </container>

    </main>
  )
}
