import {DROP_ITEM} from '../actions/index';
import R from 'ramda';

const isAddress = R.contains(R.__, [
  'concatenated_registered_address',
  'concatenated_mailing_address',
  'concatenated_dividend_address'
]);

//this function is to be called on the third page - by passing sidebarContent as
//argument
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

    const renameKeys = R.curry((keysMap, obj) => {
      return R.reduce((acc, key) => {
        acc[keysMap[key] || key] = obj[key];
        return acc;
      }, {}, R.keys(obj));
    });

    //we rename the keys in order to use it in a more reusable fashion
    //subsequent components will only have to expect line1,line2..instead of
    //regaddr_line1, mailAddr_line1, divAddr_line1,
    //regaddr_line2, mailAddr_line2, divAddr_line2,
    //note that it shoul ideally be better structured at the backend level
    const renameKeysOf = (prefix) => {
      return renameKeys(
        {[`${prefix}_line_1`]: 'line_1',
         [`${prefix}_line_2`]: 'line_2',
         [`${prefix}_line_3`]: 'line_3',
         [`${prefix}_line_4`]: 'line_4',
         [`${prefix}_locality`]: 'locality',
         [`${prefix}_region`]: 'region',
         [`${prefix}_postal_code`]: 'postal_code',
         [`${prefix}_country_name`]: 'country_name'
       });
     };

    const renamedRegisteredAddressFields = renameKeysOf("regaddr")(registeredAddressFields);
    const renamedMailingAddressFields = renameKeysOf("mailaddr")(mailingAddressFields);
    const renamedDividendAddressFields = renameKeysOf("divaddr")(dividendAddressFields);

    switch (payload.attribute) {
      case 'concatenated_registered_address':
        return R.merge({registeredAddressFields: renamedRegisteredAddressFields}, droppedAddresses);
      case 'concatenated_mailing_address':
        return R.merge({mailingAddressFields: renamedMailingAddressFields}, droppedAddresses);
      case 'concatenated_dividend_address':
        return R.merge({dividendAddressFields: renamedDividendAddressFields}, droppedAddresses);
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
