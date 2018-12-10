import React, { Fragment } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// import { SpinnerComponent } from 'ROOT/shared'
// import { ShowroomMainComponent } from 'ROOT/showroom'
// import { SignUpContainer } from 'ROOT/auth'
import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'
import { API_NAME } from 'ROOT/constants'
import { QuestionsContainer } from 'ROOT/questions'
const username = 'user@wipro.com'
const password = 'UBuildit_2018'

export default class AppComponent extends React.Component {
  signIn() {
    console.log('signIn')
    Auth.signIn(username, password)
      .then(user => console.log(user))
      .catch(err => console.log(err))
  }
  signUp() {
    console.log('signUp')
    Auth.signUp({ username, password })
      .then(user => console.log(user))
      .catch(err => console.log(err))

  }
  apiCall() {
    API.get(API_NAME, '/lessons', {}).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    console.log(process.env.AWS_AMPLIFY_AUTH_IDENTITYPOOLID)
    console.log(process.env.AWS_AMPLIFY_AUTH_USERPOOLID)
    console.log(process.env.AWS_AMPLIFY_AUTH_USERPOOL_WEBCLIENT_ID)
    console.log(process.env.AWS_AMPLIFY_API_ENDPOINT)
    // const { isLoading } = this.props.auth

    return (
      <QuestionsContainer />
      // <Fragment>
      //   <button onClick={this.signIn.bind(this)}>signIn</button>
      //   <button onClick={this.signUp.bind(this)}>signUp</button>
      //   <button onClick={this.apiCall.bind(this)}>API</button>
      // </Fragment>
    )
    // if (isLoading) {
    //   return <SpinnerComponent />
    // }

    // return (
    //   <BrowserRouter>
    //     <Fragment>
    //       <Route exact path="/" component={SignUpContainer} />
    //       <Route exact path="/showroom" component={ShowroomMainComponent} />
    //     </Fragment>
    //   </BrowserRouter>
    // )

  }
}

