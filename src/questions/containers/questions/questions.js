import { connect } from 'react-redux'
import { QuestionsComponent } from '../../components'
import { fetchQuestionsAction } from '../../actions'

export const fetchQuestions = (dispatch) => {
  dispatch(fetchQuestionsAction())
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => fetchQuestions(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsComponent)