import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

describe('<Layout />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Layout>Here is the content</Layout>)
  })

  it('should display correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should display header', () => {
    expect(
      wrapper
        .find('StyledHeader')
        .children()
        .text()
    ).toBe('Toolbar')
  })

  it('should contain two children', () => {
    expect(wrapper.props().children.length).toBe(3)
  })
})
