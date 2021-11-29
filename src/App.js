import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'
import md from "./packages/markdown-parser"

const App = () => {
  const [doc, setDoc] = useState("# Hello, World!")
  const [html, setHtml] = useState(md.render(doc))

  const handleDocChange = (newDoc) =>  {
    setDoc(newDoc)
    setHtml(md.render(doc))
    console.log(md.render(doc))
  }
  const setHandle = (document) => {
    console.log(document)
  }

  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} setHandle={setHandle}/>
      {/* <Preview doc={doc} /> */}
      <div className='preview markdownbody'>{html}</div>
    </div>
  )
}

export default App

//dangerouslySetInnerHTML={{ __html: html }}