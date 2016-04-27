import {DROP_ITEM} from '../actions/index';
import R from 'ramda';

export default function(state = {}, action) {
 switch (action.type) {
  case DROP_ITEM:
    return R.assoc(action.payload.attribute, action.payload.value, state);
  }
 return state;
}
