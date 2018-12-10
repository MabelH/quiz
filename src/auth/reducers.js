import {
  AUTH_SIGN_UP_LOAD,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_UP_FAILURE
} from './actions'

const initialState = {
  user: null,
  isLoading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  // -------------- Sign Up -------------- // 
  case AUTH_SIGN_UP_LOAD:
    return {
      ...state,
      user: null,
      isLoading: true,
      error: null
    }
  case AUTH_SIGN_UP_SUCCESS:
    return {
      ...state,
      isLoading: false,
      error: null,
      user: action.response.username
    }
  case AUTH_SIGN_UP_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    }

  default:
    return state
  }
}