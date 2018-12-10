import React from 'react'

export default class QuestionsComponent extends React.Component {

  render() {
    const { fetchQuestions } = this.props
    
    return <div onClick={ fetchQuestions }>Questions Component</div>
  }
}