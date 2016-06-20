import {BillingClients, Aliases, Countries, MatterPositions} from '../config/fakeData';
import R from 'ramda';
import axios from 'axios';

export const INITIALIZE = 'INITIALIZE';
export const UPDATE = 'UPDATE';

//1. we carry data from the second page forward
//2. we make async request to the server for the following: aliases, countries, billing client, addresses
//3. we merge both piece of info  via a serialize function
//4. we send it to the reducer
export function initialize(previousPageData) {

  const fakeData =
    {
     aliases: Aliases,
     countries: Countries,
     billing_clients: BillingClients,
     matter_positions: MatterPositions
   };


//function mergedDroppedDataAndDeserializedAddresses() {
//  //we merge the result of the redux store droppedData and the result of calling
//  //deseriialized_concatenanted_*
//  //the registered, mailing and dividend addresses are functions that expect
//  //to be called with the sidebar content of the second page
//  const {store} = previousPageData;
//  const {droppedData, sidebarContent} = store.getState();
//  const deserialized_concatenated_strings = [
//    'deserialized_concatenated_registered_address',
//    'deserialized_concatenated_mailing_address',
//    'deserialized_concatenated_dividend_address'
//  ];
//  const deserializedAddressesFunctions = R.pick(deserialized_concatenated_strings, droppedData);
//
//
//  const fetchedDeserializedAddresses =
//    R.map((item) => item(sidebarContent), deserializedAddressesFunctions);
//
//  const cleanDroppedData = R.omit(deserialized_concatenated_strings, droppedData);
//  const mergedDroppedDataAndDeserializedAddresses =
//    R.merge(cleanDroppedData, {
//      registeredAddressFields: R.path(['deserialized_concatenated_registered_address', 'registeredAddressFields'], fetchedDeserializedAddresses),
//      mailingAddressFields: R.path(['deserialized_concatenated_mailing_address', 'mailingAddressFields'], fetchedDeserializedAddresses),
//      dividendaddressFields: R.path(['deserialized_concatenated_dividend_address', 'dividendAddressFields'], fetchedDeserializedAddresses)
//    });
//
//  return mergedDroppedDataAndDeserializedAddresses;
//}
//
// const {selectedIds} = previousPageData;
// const getAliases = () => axios.get(`http://cpmtdev01.codandev.local:3000/aliases/${selectedIds}`);
// const getCountries = () => axios.get(`http://cpmtdev01.codandev.local:3000/countries/`, {maxContentLength: 1000});
// const billingClients = () => axios.get(`http://cpmtdev01.codandev.local:3000/billing_clients/`);
// const matterPositions = () => axios.get(`http://cpmtdev01.codandev.local:3000/matter_positions/${selectedIds}`);
// //const matterSpecificAddresses = () => axios.get(`http://cpmtdev01.codandev.local:3000/matter_specific_addresses/${selectedIds}`);
//
//
// const retrieveData = R.path(['data']);
// const request = axios.all([getAliases(), getCountries(), billingClients(), matterPositions()]).then(
//   axios.spread((alias, countries, billingClients, matterSpecificAddresses) => {
//     const retrievedData = R.mergeAll(R.map(item => retrieveData(item), [alias, countries, billingClients, matterSpecificAddresses]));
//     return R.merge(retrievedData, mergedDroppedDataAndDeserializedAddresses());
//  })).catch(response => {
//      if (response instanceof Error) {
//         console.log('Error', response.message);
//      } else {
//         // The request was made, but the server responded with a status code
//         // that falls out of the range of 2xx
//         console.log(response.data);
//         console.log(response.status);
//         console.log(response.headers);
//         console.log(response.config);
//  }});

  return {
    type: INITIALIZE,
    //payload: request
    payload: R.merge(fakeData, {})
  };
}

//we store the updated form content
export function update(data) {
  return {
    type: UPDATE,
    payload: data
  };
}
