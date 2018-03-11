import React from 'react'
import './Result.css'

const Result = (props) => {
  const { flags, handleButtonClick } = props
  return (
    <div className="result">
      <p>Selected Flags:</p>
      <div>
      {
        flags.map((flag) => {
          return (
            <div
              key={flag.name}
              className="flag"
              >
                <span>{flag.flag}</span>
              </div>
          )
        })
      }
    </div>
      <button onClick={handleButtonClick}>Clear Flags</button>
    </div>
  )
}

export default Result
