import React from 'react'
import './Result.css'
import PropTypes from 'prop-types'

const Result = (props) => {
  const { flags, handleButtonClick } = props
  return (
    <div className="result">
      <p>Selected Flags:</p>
      <div>
      {
        flags.map((country) => {
          return (
            <div
              key={country.name}
              className="flag"
              >
                {country.flag}
              </div>
          )
        })
      }
    </div>
      <button onClick={handleButtonClick}>Clear Flags</button>
    </div>
  )
}

Result.propTypes = {
  flags: PropTypes.array.isRequired,
  handleButtonClick: PropTypes.func.isRequired
}

export default Result
