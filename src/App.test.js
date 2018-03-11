import testSetup from './testSetup'
import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme'
import Step from './components/Step/Step'

describe('<App />', () => {
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

  it('renders 2 Step components if continents present', () => {
    const wrapper = shallow(<App />);
  })

})
