import { combineReducers } from 'redux';
import errorReducer from './error_message_reducer';
import successReducer from './success_message_reducer';

const rootReducer = combineReducers({
  successReducer: successReducer,
  errorReducer: errorReducer
});

export default rootReducer;
