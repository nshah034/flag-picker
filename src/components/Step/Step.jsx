import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import PropTypes from 'prop-types'
import './Step.css'

const Step = (props) => {
  const { heading, tagline, handleFocus, createOptions, selectedValue, handleKeyUp } = props
  return (
    <div className="step">
      <h2>{heading}</h2>
      <p>{tagline}</p>
      <SearchBox
        handleFocus={handleFocus}
        handleKeyUp={handleKeyUp}
        >
        {(value) => createOptions(value) }
      </SearchBox>
      {  selectedValue ?
      <div className="selection-text">
        You selected
        <h2>{selectedValue.continent}</h2>
      </div>
      :null
      }
    </div>
  )
}
Step.propTypes = {
  heading: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  handleFocus: PropTypes.func,
  createOptions: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func,
  selectedValue: PropTypes.shape({
    continent:PropTypes.string.isRequired,
    countries:PropTypes.array.isRequired
  })
}

export default Step
