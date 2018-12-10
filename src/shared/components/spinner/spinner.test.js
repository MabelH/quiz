import React from 'react'
import Component from './spinner'
import { shallow } from 'enzyme'

describe('Spinner Component', () => {
  it('should exist', () => {
    expect(Component).toBeDefined()
  })

  it('should div.spinner', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('div.spinner').length).toEqual(1)
  })
})