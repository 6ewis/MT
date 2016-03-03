import {SELECT_ENTITY, REMOVE_ENTITY} from '../actions/index';

export default function(state = [], action) {
 switch (action.type) {
  case SELECT_ENTITY:
    console.log("I'm in the reducer and the data after selecting an item is: ", action.payload);
    return [action.payload, ...state];
  case REMOVE_ENTITY:
    console.log("I'm in the reducer and the data after removing an item is: ", action.payload);
    return state.filter((obj) => {
      return obj.id !== action.payload.id;
    });
 }
 return state;
}
