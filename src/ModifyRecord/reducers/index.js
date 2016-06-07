import initialFormContentReducer from './initialFormContent';
import updatedFormContentReducer from './updatedFormContent';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  initialFormContent: initialFormContentReducer,
  updatedFormContent: updatedFormContentReducer
});

export default RootReducer;
