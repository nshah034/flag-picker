import testSetup from '../../testSetup'
import React from 'react'
import SearchBox from './SearchBox'
import { shallow, mount, render } from 'enzyme'

describe('<SearchBox />', () => {
  it('renders 1 <SearchBox/> component with className', () => {
    const component = shallow (<SearchBox/>)
    expect(component).toHaveLength(1)
    expect(component.props().className).toEqual('SearchBox')
  })

  it('renders 1 input', () => {
    const component = shallow(<SearchBox/>)
    expect(component.find('input')).toHaveLength(1)
  })

  it('renders component passed by props.children', () => {
    var func = () => {return <h2>Test</h2>}
    const component = shallow(<SearchBox children={func}/>)
    expect(component.find('h2')).toHaveLength(1)
  })

})
