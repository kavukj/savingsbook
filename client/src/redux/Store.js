import { createStore, applyMiddleware } from 'redux'
import rootReducer from './RootReducer'

const middlewares = [];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;