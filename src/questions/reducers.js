import { QUESTIONS_FETCH } from './constants'
const initialState = {
  items: {
    0: {
      title: 'SOME 1',
      description: 'Desc 1'
    }, 
    1: {
      title: 'SOME 1',
      description: 'Desc 1'
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case QUESTIONS_FETCH:
    return {
      ...state,
      items: {
        ...state.items,
        3: {
          title: 'SOME 3',
          description: 'Desc 3'
        },
        4: {
          title: 'SOME 4',
          description: 'Desc 4'
        }
      }
    } 
  default:
    return state
  }
}