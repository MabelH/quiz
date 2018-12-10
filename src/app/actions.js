import * as actionType from '../constants.js'

export function submitAnswer(answer){
  return {
    type: actionType.SUBMIT_ANSWER,
    object: answer
  }
}