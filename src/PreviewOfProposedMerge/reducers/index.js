import initialData from './initialData';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  initialData: initialData
});

export default RootReducer;
