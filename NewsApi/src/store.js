import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { newsListReducer } from './reducers/NewsReducer'

const middleware = [thunk]

const reducer = combineReducers({
  newsList: newsListReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
