import FormContentReducer from './formContent';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  formContent: FormContentReducer
});

export default RootReducer;
