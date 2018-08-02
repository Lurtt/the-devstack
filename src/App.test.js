import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from './App'

describe('<App />', () => {
  it('should create instance', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.containsMatchingElement(<h1>hi there!</h1>)).toEqual(true)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
