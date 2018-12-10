import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import createSagaMiddleware, { effects } from 'redux-saga'
import { AuthReducers, AuthSagas } from './auth'
import { QuestionsReducers } from './questions'

// Combine all reducers
const reducers = combineReducers({
  auth: AuthReducers,
  questions: QuestionsReducers
})

// Prepare Sagas and Enhancers
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Prepare Store
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

// Run sagas
sagaMiddleware.run(function* () {
  yield effects.all([
    AuthSagas()
  ])
})

export default store 