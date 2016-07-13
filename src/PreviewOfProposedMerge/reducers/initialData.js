import {INITIALIZE} from '../actions/index';

 const defaultState = {
  addressesContainer: {}
 }

export default (state = defaultState, action) => {
  switch (action.type) {
   case INITIALIZE:
     console.log("I'm in the reducer and the data during initialization is: ", action);
     return action.payload;
  }
  return state;
};
