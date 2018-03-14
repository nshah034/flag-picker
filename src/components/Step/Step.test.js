import testSetup from '../../testSetup'
import React from 'react'
import Step from './Step'
import SearchBox from '../SearchBox/SearchBox'
import { shallow, mount, render } from 'enzyme'

describe('<Step />', () => {
  const props = {
    heading: 'Some Heading',
    tagline: 'SomeTageLine',
    handleFocus: () => {},
    createOptions: () => {},
    selectedValue: {continent:'Asia', countries:[]},
    handleKeyUp: () => {}
  }
  const wrapper = shallow (<Step {...props}/>)

  it('renders 1 <Step/> component with className', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders a SearchBox', () => {
    expect(wrapper.find(SearchBox)).toHaveLength(1)
  })

})
