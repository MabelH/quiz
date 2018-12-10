import { connect } from 'react-redux'
import { AppComponent } from '../../components'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)