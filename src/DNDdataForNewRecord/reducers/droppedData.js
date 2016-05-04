import {DROP_ITEM} from '../actions/index';
import R from 'ramda';

const isAddress = R.contains(R.__, [
  'concatenated_registered_address',
  'concatenated_mailing_address',
  'concatenated_dividend_address'
]);

//this function is to be called on the third page - where sideContent is available

const droppedAddresses = {};
const mergeCorrespondingaddressFields = R.curry((payload, sidebarContent) => {
    //if the attribute that we DND is a concatenated_x_address
    //we grab the addresses fields corresponding to the concatenated_x_address
    const curryPrefixAddress = R.curry((prefix, value) => `${prefix}${value}`);
    const fields = (prefix) => R.map(curryPrefixAddress(prefix),
     ['_line_1', '_line_2', '_line_3', '_line_4', '_locality', '_region', '_postal_code', '_country_name']);

    const objectBasedOnId = R.find(R.propEq('id', payload.id))(sidebarContent);

    const registeredAddressFields = R.pick(fields("regaddr"), objectBasedOnId);
    const mailingAddressFields = R.pick(fields("mailaddr"), objectBasedOnId);
    const dividendAddressFields = R.pick(fields("divaddr"), objectBasedOnId);

    switch (payload.attribute) {
      case 'concatenated_registered_address':
        return R.merge({registeredAddressFields: registeredAddressFields}, droppedAddresses);
      case 'concatenated_mailing_address':
        return R.merge({mailingAddressFields: mailingAddressFields}, droppedAddresses);
      case 'concatenated_dividend_address':
        return R.merge({dividendAddressFields: dividendAddressFields}, droppedAddresses);
      }
});

export default function(state = {}, action) {
 switch (action.type) {
  case DROP_ITEM:
    return isAddress(action.payload.attribute) ?
      R.assoc(`deserialized_${action.payload.attribute}`, mergeCorrespondingaddressFields(action.payload), state) :
      R.assoc(action.payload.attribute, action.payload.value, state);
  }
 return state;
}
