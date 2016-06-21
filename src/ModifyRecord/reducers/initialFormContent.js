import {INITIALIZE} from '../actions/index';

const defaultState = {
  //components expect an array for certain properties
  //preventing undefined errors on first rendering
  aliases: [],
  countries: [],
  billing_clients: [],
  matter_positions: [],
  matter_specific_addresses: [],
  loading: true //the spinner will be watching this property
};

//replace console.log by middleware logger
export default (state = defaultState, action) => {
  switch (action.type) {
   case INITIALIZE:
     console.log("I'm in the reducer and the data during initialization is: ", action);
     return action.payload;
  }
  return state;
};
