import { FETCH_ENTITIES, SELECT_ENTITY, REMOVE_ENTITY} from '../actions/index';

export default function(state = [], action) {
 switch (action.type) {
  case FETCH_ENTITIES:
    console.log('Im in the reducer and the data from the server is: ', action.payload.fact_table);
    return action.payload.fact_table;
  case SELECT_ENTITY:
    return state.filter((obj) => {
      return obj.id !== action.payload.id;
    });
  case REMOVE_ENTITY:
    return [action.payload, ...state];
 }
 return state;
}
