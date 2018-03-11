import React from 'react'
import './Result.css'
import PropTypes from 'prop-types'

const Result = (props) => {
  const { flags, handleButtonClick, removeCountry } = props
  return (
    <div className="Result">
      <h2>Selected Flags:</h2>
      <div>
      {
        flags.map((country, index) => {
          return (
            <div
              key={country.name}
              className="flag"
              >
                <span
                  onClick = {() => {removeCountry(index)} }
                  className="close"
                >
                  X
                </span>
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
  handleButtonClick: PropTypes.func.isRequired,
  removeCountry: PropTypes.func.isRequired
}

export default Result
