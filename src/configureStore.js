import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import eventListReducer from './modules/EventListModule'

export default function configureStore() {
  const store = createStore(
    combineReducers({
      eventList: eventListReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      logger,
    )
  )

  return store
}
