import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'ROOT/app'

// General styles
import './assets/styles/style.scss'
import './assets/styles/themify-icons.css'

// Redux store
import store from './store'

// AWS Amplify
import './amplify'

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)