import React from 'react'
import Component from './app'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { SpinnerComponent } from 'ROOT/shared'

jest.mock('react-router-dom')
jest.mock('ROOT/shared')

const state = {
  auth: {
    isLoading: false
  },
  checkUser: () => { }
}

describe('App Component', () => {
  it('should exist', () => {
    expect(Component).toBeDefined()
  })

  xit('should render BrowserRouter if no loading state', () => {
    state.auth.isLoading = false
    const wrapper = shallow(<Component {...state} />)

    expect(wrapper.find(BrowserRouter).length).toEqual(1)
  })

  xit('should render SpinnerComponent if loading state', () => {
    state.auth.isLoading = true
    const wrapper = shallow(<Component {...state} />)

    expect(wrapper.find(SpinnerComponent).length).toEqual(1)
  })
})