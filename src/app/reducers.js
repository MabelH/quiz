import { SUBMIT_ANSWER } from './actions'

const initialState = {
  answer: null
}
function submitAnswer(state = initialState, action){
  switch (action.type){
  case SUBMIT_ANSWER:
    return action.object
  default:
    return state
  }
}

export default submitAnswer