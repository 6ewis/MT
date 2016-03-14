import {SELECT_ACCORDION} from '../actions/index';

export default function(state = '', action) {
 switch (action.type) {
  case SELECT_ACCORDION:
    console.log("I'm in the reducer and the data after selecting an accordion is: ", action.payload);
    return action.payload;
  }
 return state;
}
