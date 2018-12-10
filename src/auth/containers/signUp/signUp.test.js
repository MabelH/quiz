import * as Container from './signUp'
import * as Actions from '../../actions'

jest.mock('../../actions')
jest.mock('../../components')

describe('>>> Sign Up Container', () => {
  it('should exist', () => {
    expect(Container).toBeDefined()
  })

  describe('signUp', () => {
    it('should exist', () => {
      expect(typeof Container.signUp).toBe('function')
    })

    it('should dispatch signUpAction', () => {
      const testObj = { testDispatch: () => { } }
      const spyDispatch = jest.spyOn(testObj, 'testDispatch')
      const spyAction = jest.spyOn(Actions, 'signUpAction')

      Container.signUp(testObj.testDispatch)

      expect(spyDispatch).toBeCalled()
      expect(spyAction).toBeCalled()
    })
  })
})