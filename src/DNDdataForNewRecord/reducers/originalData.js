import {INITIALIZE} from '../actions/index';

export default function(state = [], action) {
 switch (action.type) {
  case INITIALIZE:
    return action.payload;
  }
 return state;
}
