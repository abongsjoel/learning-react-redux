import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import muffinsReducer from './muffins';

const rootReducer = combineReducers({
  muffins: muffinsReducer
})

const store = createStore( rootReducer, applyMiddleware(thunk));

export default store;