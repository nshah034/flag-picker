import testSetup from '../../testSetup'
import React from 'react'
import Options from './Options'
import { shallow, mount, render } from 'enzyme'

describe('<Result />', () => {
  const options = [
    {name: 'Mexico', flag:"flag"},
    {name: 'someCountry', flag:"someFlag"}
  ]
  const handleSelect = () => {}
  const property = 'name'
  const current = 2
  const handleClickOutside = () => {}
  const selected = [{name: 'Mexico', flag:"flag"}]

  const props = {
    options,
    handleSelect,
    property,
    current,
    handleClickOutside,
    selected
  }
  const component = shallow (<Options {...props} />)

  it('renders 1 <Options/> component', () => {
    expect(component).toHaveLength(1)
  })

  it('renders 1 ul', () => {
    expect(component.find('ul')).toHaveLength(1)
  })

  it('li', () => {
    expect(component.find('li')).toHaveLength(2)
  })

})
