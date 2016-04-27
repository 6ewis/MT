import {INITIALIZE, DROP_ITEM, CLICK_X} from '../actions/index';
import R from 'ramda';

export default function(state = [], action) {
 switch (action.type) {
  case INITIALIZE:
    console.log("I'm in the reducer and the data during initialization is: ", action.payload.data);
    return action.payload;
  case DROP_ITEM:
    const isPayloadDropItem = R.propEq(action.payload.attribute, action.payload.value);
    const removePayloadAttr = R.when(isPayloadDropItem, R.dissoc(action.payload.attribute));
    return R.map(removePayloadAttr, state);
  case CLICK_X:
    const isPayloaClickX = R.propEq(action.payload.attribute, undefined);
    const addPayloadAttr = R.when(isPayloaClickX, R.assoc(action.payload.attribute, action.payload.value));
    return R.map(addPayloadAttr, state);
  }
 return state;
}
