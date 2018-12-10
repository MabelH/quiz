import { connect } from 'react-redux'
import { SignUpComponent } from '../../components'
import { signUpAction } from '../../actions'

export const signUp = (dispatch, username, password) => {
  dispatch(signUpAction(username, password))
}

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (username, password) => signUp(dispatch, username, password)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpComponent)