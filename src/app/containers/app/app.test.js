import * as Container from './app'

jest.mock('../../components')

describe('App Container', () => {
  it('should exist', () => {
    expect(typeof Container).toBeDefined()
  })
})