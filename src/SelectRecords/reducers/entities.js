import {FETCH_ENTITIES} from '../actions/index';

export default function(state = [], action) {
 switch (action.type) {
  case FETCH_ENTITIES:
    console.log('Im in the reducer and the data from the server is: ', action.payload.fact_table);
    return action.payload.fact_table;
 }
 return state;
}
