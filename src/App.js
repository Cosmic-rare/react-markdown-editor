import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'
import md from "./packages/markdown-parser"

const App = () => {
  const [doc, setDoc] = useState("# Hello, World!")
  const [html, setHtml] = useState(md.render(doc))

  const setHandle = (document) => {
    setHtml(md.render(document))
  }

  return (
    <div className='app'>
      <Editor initialDoc={doc} setHandle={setHandle}/>
      {/* <Preview doc={doc} /> */}
      <div className='preview markdownbody' dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}

export default App

//dangerouslySetInnerHTML={{ __html: html }}