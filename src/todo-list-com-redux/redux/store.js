import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import todoReducer from './reducers/reducer';

const store = createStore(todoReducer, composeWithDevTools());

export default store;
