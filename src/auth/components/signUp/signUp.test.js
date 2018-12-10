import React from 'react'
import Component from './signUp'
import { shallow } from 'enzyme'
import { AuthFormComponent } from '../authForm'

jest.mock('react-router-dom')

describe('Sign Up Component', () => {
  it('should exist', () => {
    expect(Component).toBeDefined()
  })

  it('should render form', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.find(AuthFormComponent).length).toEqual(1)
  })
})