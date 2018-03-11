import React, { Component } from 'react'
import './App.css'
import Options from './components/Options/Options'
import dropDownOptions from './constants'
import Step from './components/Step/Step'
import Result from './components/Result/Result'

class App extends Component {
  state = {
    dropDownOptions,
    continent: null,
    countries: [],
    isOpen: true,
    isCountryOpen: true,
    hoveredContinent: -1,
    hoveredCountry: -1
  }

 clearFlags = () => {
   this.setState({ countries: [] })
 }

  handleContinentSelect = (continent) => {
    if(typeof continent === "number" ) {
      continent = this.state.dropDownOptions[continent]
    }
    this.setState({
      continent: continent,
      isOpen:false,
      hoveredContinent: -1,
      hoveredCountry: -1
    })
  }

  handleCountrySelect = (country) => {
    const { countries, continent } = this.state
    let hovered
    if(typeof country === "number") {
      country = continent.countries[country]
      hovered = this.state.hoveredCountry
    }
    else {
      hovered = -1
    }

    const found = countries.findIndex(c => c.name === country.name)
    if(found !== -1) {
      this.setState(({countries}) => ({
        hoveredCountry: hovered,
        countries: [
          ...countries.slice(0, found),
          ...countries.slice(found + 1),
        ]
      }))
    }
    else {
      this.setState(({countries}) => ({
        hoveredCountry: hovered,
        countries: [...countries, country ],
      }))
    }
  }

  createContinentDropdown = (value) => {
    const { isOpen, dropDownOptions, hoveredContinent } = this.state
    if(value !== undefined && isOpen) {
      const options = dropDownOptions.filter((c) => {
        return c.continent.toLowerCase().indexOf(value.toLowerCase()) === 0
      })
      return (
        <Options
          options={options}
          handleSelect={this.handleContinentSelect}
          current={hoveredContinent}
          handleClickOutside={this.handleClickOutside}
          property='continent'
        />
      )
    }
  }

  createCountriesDropdown = (value) => {
    if(value !== undefined && this.state.isCountryOpen) {
      var countries = this.state.continent.countries.filter((c) => {
        return c.name.toLowerCase().indexOf(value.toLowerCase()) === 0
      })
      return (
        <Options
          options={countries}
          handleSelect={this.handleCountrySelect}
          selected={this.state.countries}
          property='name'
          current={this.state.hoveredCountry}
          handleClickOutside={this.handleClickOutside}
        />

      )
    }
  }

  browse = (key, currentPos, hoverProp, openProp, handleSelect, options ) => {
    switch(key) {
      case 'ArrowUp':
        if(currentPos > 0) {
          this.setState({[hoverProp]: currentPos - 1 })
        }
        break;
      case 'ArrowDown':
        if(currentPos < options.length - 1) {
          this.setState({
            [hoverProp]: currentPos + 1,
            [openProp]: true
          })
        }
        break;
      case 'Enter':
      if(currentPos > -1) {
          handleSelect(currentPos)
      }
      break;
      default:
      break;
    }
  }

  browseContinents = (e) => {
    this.browse(
      e.key,
      this.state.hoveredContinent,
      'hoveredContinent',
      'isOpen',
      this.handleContinentSelect,
      dropDownOptions
    )
  }
  browseCountries = (e) => {
    const { continent, hoveredCountry } = this.state
    this.browse(
      e.key,
      hoveredCountry,
      'hoveredCountry',
      'isCountryOpen',
      this.handleCountrySelect,
      continent.countries
    )
  }

  handleClickOutside = (e) => {
    this.setState({
      isOpen: false,
      isCountryOpen: false,
      hoveredContinent: -1,
      hoveredCountry: -1
    })
  }

  render() {
    const { continent } = this.state
    return (
      <div className="App">
        <div>
          <h2>FLAG PICKER</h2>
          <p>This app will help you to learn flags around the world in <span className="underline">3 steps</span></p>
        </div>
        <Step
          heading={'Step 1'}
          tagline= {'Select a continent'}
          handleFocus={() => this.setState({isOpen: true})}
          createOptions={this.createContinentDropdown}
          selectedValue={ this.state.continent }
          handleKeyUp={this.browseContinents}
        />
        { continent ?
        <Step
          heading={'Step 2'}
          tagline= {'Now Select a country'}
          createOptions={this.createCountriesDropdown}
          handleKeyUp={this.browseCountries}
          handleFocus={() => this.setState({isCountryOpen:true})}
        />
        :null
      }
      {
        this.state.countries &&  this.state.countries.length > 0 ?
        <Result
          flags={this.state.countries}
          handleButtonClick={this.clearFlags}
        />
        :null
      }
    </div>
    );
  }
}

export default App;
