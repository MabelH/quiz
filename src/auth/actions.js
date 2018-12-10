// -------------- Sign Up -------------- //
export const AUTH_SIGN_UP_LOAD = 'AUTH_SIGN_UP/LOAD'
export const AUTH_SIGN_UP_SUCCESS = 'AUTH_SIGN_UP/SUCCESS'
export const AUTH_SIGN_UP_FAILURE = 'AUTH_SIGN_UP/FAILURE'

export const signUpAction = (username, password) => {
  return {
    type: AUTH_SIGN_UP_LOAD,
    payload: { username, password }
  }
}

export const signUpSuccessAction = response => {
  return {
    type: AUTH_SIGN_UP_SUCCESS,
    response
  }
}

export const signUpFailureAction = error => {
  return {
    type: AUTH_SIGN_UP_FAILURE,
    error
  }
}