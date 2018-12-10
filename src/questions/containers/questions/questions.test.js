import * as Container from './questions'
import * as Actions from '../../actions'

jest.mock('../../actions')
jest.mock('../../components')

describe('>>> Questions Container', () => {
  it('should exist', () => {
    expect(Container).toBeDefined()
  })

  describe('fetchQuestions', () => {
    it('should exist', () => {
      expect(Container.fetchQuestions).toBeDefined()
    })

    it('should dispatch fetchQuestionsAction', () => {
      // Setup
      const testObj = { dispatch: () => {} }
      const spy = jest.spyOn(testObj, 'dispatch')
      const spyOnAction = jest.spyOn(Actions, 'fetchQuestionsAction')

      // Execute
      Container.fetchQuestions(testObj.dispatch)

      // Expect
      expect(spy).toBeCalled()
      expect(spyOnAction).toBeCalled()
    })
  })
})