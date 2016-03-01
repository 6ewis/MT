import EntitiesReducer from './entities';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  entities: EntitiesReducer
});

export default RootReducer;
