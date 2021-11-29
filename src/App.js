import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'

const App = () => {
  const [doc, setDoc] = useState(`# Hello!

  It's is MarkdownEditor.
  
  ## Use packages
  
  - \`remark\`(\`MarkdownParser\`)
  - \`CodeMirror6\`(Online\`Editor\`)
  - \`React.js\`(frontend  framework)
  - \`Emotion\`(CSS in JS liblary)
  
  ## syntax highlight
  \`\`\`jsx
  import React, { useState, useCallback } from 'react'
  import Editor from './editor'
  import Preview from './preview'
  
  const App = () => {
    const [doc, setDoc] = useState('# Hello, World!\\n')
  
    const handleDocChange = useCallback(newDoc => {
      setDoc(newDoc)
    }, [])
  
    return (
      <div className='app'>
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </div>
    )
  }
  
  export default App
  \`\`\`
  `)

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
    console.log(newDoc)
  }, [])

  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App