import {INITIALIZE} from '../actions/index';

 const defaultState = {
    newCorporatePerson: {
      addressesContainer: {}
    }
 };

export default (state = defaultState, action) => {
  switch (action.type) {
   case INITIALIZE:
     return action.payload;
  }
  return state;
};
