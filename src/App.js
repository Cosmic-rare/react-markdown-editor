/** @jsxImportSource @emotion/react */

import { useState } from "react"
import logo from "./logo.svg"
import { css } from "@emotion/react"

const azure = css`
  color: azure;
`
const logoStyle = css`
  height: 40vmin;
  pointer-events: none;
  animation: rotate-anime 15s linear infinite;
  @keyframes rotate-anime {
    0%  {transform: rotate(0);}
    100%  {transform: rotate(360deg);}
  }
`
const buttonStyle = css`
  margin-bottom: 10px;
`

const App = () => {
  const [count, setCount] = useState(0)

  return(
    <div css={css`
      text-align: center;
    `}>
      <h1 css={azure}>Hello, React.js</h1>

      <div className="button" css={buttonStyle}>
        <button 
          onClick={() => {setCount(count + 1)}} 
        >
          Count: {count}
        </button>
      </div>

      <img src={logo} alt="react-logo.svg" css={logoStyle} />
    </div>
  )
}

export default App