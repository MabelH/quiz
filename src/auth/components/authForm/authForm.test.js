import React from 'react'
import Component from './authForm'
import { shallow } from 'enzyme'

jest.mock('react-router-dom')

describe('Auth Form Component', () => {
  it('should exist', () => {
    expect(Component).toBeDefined()
  })

  it('should render form', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('form').length).toEqual(1)
  })
})