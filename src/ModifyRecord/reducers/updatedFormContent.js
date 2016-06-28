import {UPDATE} from '../actions/index';
import R from 'ramda';

  const defaultState = {
      //we need to define the following since we don't want to overwrite it but update it
      addressesContainer: {}
  };

  //ADDRESS CONTAINER
  const updateAddressData = (object, state) => {
    //we van update/add existing keys
    //initial state of address container
    //addressContainer: {
    //  #1RegisteredAddress: {
    //    line_2: '2',
    //    line_3, '3'
    //  }
    //  #2DividendAddres: {
    //    Line2: "2",
    //    Line3: "3"
    //   }
    //}
    //we expect an object with a single key and value
    const firstKey = (anyObject) => R.keys(anyObject)[0];
    const rootObjectKey = firstKey(object); //#1RegisteredAddress
    const rootObjectValue = object[rootObjectKey]; //{Line_1: 1}
    //we also expect the nestedObject to have a single key and value
    const nestedObjectKey = firstKey(rootObjectValue); //Line_1
    const nestedObjectValue = R.prop(nestedObjectKey, rootObjectValue); //1
    const updateNestedProp =
     (acc, next) => R.assocPath([rootObjectKey, nestedObjectKey], nestedObjectValue, next);
    const updatedState =
      R.reduce(updateNestedProp, {}, [state.addressesContainer]);

    //final state of address container
    //addressContainer: {
    //  #1RegisteredAddress: {
    //    Line_1: "1",
    //    line_2: '2',
    //    line_3, '3'
    //  }
    //  #2DividendAddres: {
    //    Line2: "2",
    //    Line3: "3"
    //   }
    //}
    console.log("I'm in the root updateAddressData function , and the state of the addressContainer is", updatedState);
    return {addressesContainer: updatedState};
  };

  //ENTIRE FORM
  const updateFormData = (object, state) => {
    const firstKey = (anyObject) => R.keys(anyObject)[0];
    const rootObjectKey = firstKey(object);
    const rootObjectValue = object[rootObjectKey];
    /*eslint-disable */
    return (firstKey(object) === 'addressesContainer') ?
      updateAddressData(object.addressesContainer, state) :
      R.assoc(`${rootObjectKey}`, rootObjectValue, state);
    /*eslint-enable */
  };

//replace console.log by middleware logger
export default (state = defaultState, action) => {
  switch (action.type) {
   case UPDATE:
     return updateFormData(action.payload, state);
  }
  return state;
};
