import testSetup from '../../testSetup'
import React from 'react'
import Result from './Result'
import { shallow, mount, render } from 'enzyme'

describe('<Result />', () => {
  const flags = [
    {name: 'Mexico', flag:"flag"},
    {name: 'someCountry', flag:"someFlag"}
  ]
  const props = {
    flags,
    handleButtonClick: () => {},
    removeCountry: () => {}
  }
  const component = shallow (<Result {...props} />)

  it('renders 1 <Result/> component', () => {
    expect(component).toHaveLength(1)
  })

  it('renders 1 h2', () => {
    expect(component.find('h2')).toHaveLength(1)
  })

  it('renders list of flags', () => {
    expect(component.find('div')).toHaveLength(4)
  })

})
