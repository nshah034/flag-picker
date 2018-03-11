import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchBox.css'

export default class SearchBox extends Component {
  static propTypes: {
    children: PropTypes.func.isRequired,
    handleFocus: PropTypes.func
  }

  static defaultProps = {
    children: () => {}
  }

  state = {
    value: undefined
  }

  updateValue = (e) => {
    this.setState({value: e.target.value})
  }

  handleFocus = (e) => {
    this.updateValue(e)
    if(this.props.handleFocus)
    {
      this.props.handleFocus(e)
    }
  }

  render() {
    return (
      <div className="SearchBox">
        <input
          type='text'
          onChange={this.updateValue}
          onFocus={this.handleFocus}
          onKeyDown = {this.props.handleKeyUp}
        />
        {this.props.children(this.state.value)}
      </div>
    )
  }
}
