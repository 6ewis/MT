import {INITIALIZE} from '../actions/index';

const defaultState = {
  aliases: [],
  countries: [],
  billing_clients: [],
  matter_specific_addresses: []
};

//replace console.log by middleware logger
export default (state = defaultState, action) => {
  switch (action.type) {
   case INITIALIZE:
     console.log("I'm in the reducer and the data during initialization is: ", action.payload);
     return action.payload;
  }
  return state;
};
