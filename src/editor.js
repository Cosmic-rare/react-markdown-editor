import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './packages/use-codemirror'


const editor = (props) => {
  const { onChange, initialDoc, setHandle } = props

  const [refContainer, editorView] = useCodeMirror({
    initialDoc: initialDoc,
    onChange: setHandle
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div className='editor-wrapper' style={{width: "50%"}} ref={refContainer}></div>
}


export default editor