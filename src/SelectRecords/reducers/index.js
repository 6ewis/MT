import EntitiesReducer from './entities';
import SelectedEntitiesReducer from './selectedEntities';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  selectedEntities: SelectedEntitiesReducer
});

export default RootReducer;
