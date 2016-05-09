import {BillingClients, Aliases, Countries, MatterSpecificAddresses} from '../config/fakeData';
import R from 'ramda';
import axios from 'axios';

export const INITIALIZE = 'INITIALIZE';

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
     matterSpecificAddresses: MatterSpecificAddresses
   };
  

//const {selectedIds, store} = previousPageData;
//const {droppedData, sidebarContent} = store.getState();
//const deserializedAddressesFunctions = R.pick([
//  'deserialized_concatenated_registered_address',
//  'deserialized_concatenated_mailing_address',
//  'deserialized_concatenated_dividend_address'
//], droppedData);
//
//const fetchedDeserializedAddresses =
//  R.map((item) => item(sidebarContent), deserializedAddressesFunctions);
//
//const mergedDroppedDataAndDeserializedAddresses =
//  R.merge(droppedData, fetchedDeserializedAddresses);
//
// const getAliases = () => axios.get(`http://cpmtdev01.codandev.local:3000/aliases/${selectedIds}`);
// const getCountries = () => axios.get(`http://cpmtdev01.codandev.local:3000/countries/`, {maxContentLength: 1000});
// const billingClients = () => axios.get(`http://cpmtdev01.codandev.local:3000/billing_clients/`);
// const matterSpecificAddresses = () => axios.get(`http://cpmtdev01.codandev.local:3000/matter_specific_addresses/${selectedIds}`);
//
// const retrieveData = R.path(['data']);
// const request = axios.all([getAliases(), getCountries(), billingClients(), matterSpecificAddresses()]).then(
//   axios.spread((alias, countries, billingClients, matterSpecificAddresses) => {
//     const retrievedData = R.mergeAll(R.map(item => retrieveData(item), [alias, countries, billingClients, matterSpecificAddresses]));
//     return R.merge(retrievedData, mergedDroppedDataAndDeserializedAddresses);
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
    payload: fakeData
  };
}
