import React from 'react'
import './Options.css'
import PropTypes from 'prop-types'

export default class Options extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    handleClickOutside: PropTypes.func.isRequired,
    selected: PropTypes.array
  }
  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
}

handleClickOutside = (e) => {
  if(this._container &&
    !this._container.contains(e.target) &&
    e.target.tagName !== "INPUT" ) {
    this.props.handleClickOutside()
  }
}

  isSelected = (country) => {
    const { selected } = this.props
    if(selected && Array.isArray(selected)) {
      return selected.find((s) => s.name === country)
    }
  }
  render () {
    const {
      options,
      handleSelect,
      property,
      current
    }  = this.props
    return (
      <ul className="Options" ref={(node) => this._container = node}>
        {
          options.map((opt, index) => {
            return (
              <li
                key={opt[property]}
                onClick={() => handleSelect(opt)}
                className={
                  `${index === current ? 'hovered' : ''}
                  ${this.isSelected(opt[property]) ? 'selected': ''}`
                }
                >
                  {opt.flag || ''} { opt[property] }
                </li>
            )
          })
        }
      </ul>
    )
  }
}
