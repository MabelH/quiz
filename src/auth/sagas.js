import { effects } from 'redux-saga'
import { signUp } from './api'
import {
  AUTH_SIGN_UP_LOAD,
  signUpSuccessAction,
  signUpFailureAction
} from './actions'

export function* signUpFlow({ payload }) {
  try {
    const response = yield effects.call(signUp, payload)
    yield effects.put(signUpSuccessAction(response))
  } catch (e) {
    yield effects.put(signUpFailureAction(e))
  }
}

export function* watchSignUp() {
  yield effects.takeLatest(AUTH_SIGN_UP_LOAD, signUpFlow)
}

export default function* () {
  yield effects.all([
    effects.fork(watchSignUp)
  ])
}