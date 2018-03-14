import testSetup from '../../testSetup'
import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme'
import Step from '../Step/Step'


describe('<App />', () => {
  let w = shallow (<App/>);
  function setUp () {
    const c = {name:'India', flag: '🇮🇳'}
    const continent = {continent: 'ABC', countries:[c]}
    w.instance().handleContinentSelect(continent)
  }
  it('renders 1 <App/> component with className', () => {
    const component = shallow (<App/>);
    expect(component).toHaveLength(1)
    expect(component.props().className).toEqual('App')
  })
  it('renders h2 and p tag', () => {
    const component = shallow(<App/>)
    expect(component.find('h2').text()).toEqual('FLAG PICKER')
    expect(component.find('p').text()).toEqual('This app will help you to learn flags around the world in 3 steps')
  })

  it('renders 1 Step components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Step)).toHaveLength(1);
  })

  it('sets the state value of continent', () => {
    const wrapper = shallow(<App />)
    const continent = {continent: 'ABC', countries:[]}
    wrapper.instance().handleContinentSelect(continent)
    expect(wrapper.state().continent).toEqual(continent)
  })

  it('sets the state value of continent if given continent is number', () => {
    const wrapper = shallow(<App />)
    const continent = 1
    wrapper.instance().handleContinentSelect(continent)
    expect(wrapper.state().continent.continent).toEqual('America')
  })

  it('sets the state value of country', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state().countries).toHaveLength(0)
    const country = {name:'India', flag: '🇮🇳'}
    wrapper.instance().handleCountrySelect(country)
    expect(wrapper.state().countries).toHaveLength(1)
  })

  it('sets the state value of country if its a number', () => {
    setUp()
    const country = 0
    w.instance().handleCountrySelect(country)
    expect(w.state().countries).toHaveLength(1)
  })

  it('removes country from list', () => {
    setUp()
    const country = 0
    w.instance().handleCountrySelect(country)
    expect(w.state().countries).toHaveLength(0)
  })

  it('Will clear all countries', () => {
    setUp()
    const country = 0
    w.instance().handleCountrySelect(country)
    expect(w.state().countries).toHaveLength(1)
    w.instance().clearFlags()
    expect(w.state().countries).toHaveLength(0)
  })

  it('Will create Options dropDown', () => {
    const wrapper = shallow (<App/>);
    const opts = wrapper.instance().createContinentDropdown('as')
    expect(opts.props.current).toEqual(-1);
  })

})
