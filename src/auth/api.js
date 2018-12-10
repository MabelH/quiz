import Auth from '@aws-amplify/auth'

export const signUp = ({ username, password }) => {
  return Auth.signUp({ username, password })
}