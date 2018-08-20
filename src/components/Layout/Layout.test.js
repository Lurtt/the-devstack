import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Layout from './Layout'

describe('<Layout />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Layout>Here is the content</Layout>)
  })

  it('should display correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should display header', () => {
    expect(wrapper.find('header').text()).toBe('Toolbar')
  })

  it('should contain two children', () => {
    expect(wrapper.props().children.length).toBe(3)
  })
})
