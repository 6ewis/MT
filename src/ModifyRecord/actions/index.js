import {BillingClients, Aliases, Countries, MatterSpecificAddresses} from '../config/fakeData';
import R from 'ramda';
import axios from 'axios';

export const INITIALIZE = 'INITIALIZE';

//1. we carry data from the second page forward
//2. we make async request to the server for the following: aliases, countries, billing client, addresses
//3. we merge both piece of info  via a serialize function
//4. we send it to the reducer
export function initialize(previousPageData) {

  console.log('the initialdata is:', previousPageData);

  const fakeData =
    {
     aliases: Aliases,
     countries: Countries,
     billing_clients: BillingClients,
     matterSpecificAddresses: MatterSpecificAddresses
   };

  const selectedIds = previousPageData.selectedIds;
  const config = {
    responseType: 'json'
  };

   const request = axios.all(
     axios.get(`http://cpmtdev01.codandev.local:3000/aliases/${selectedIds}`, config),
     axios.get(`http://cpmtdev01.codandev.local:3000/countries/`, config),
     //axios.get(`http://cpmtdev01.codandev.local:3000/billing_clients/`, config),
     //axios.get(`http://cpmtdev01.codandev.local:3000/matter_specific_addresses/${selectedIds}`, config),
   ).catch(response => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      } else {
         // The request was made, but the server responded with a status code
         // that falls out of the range of 2xx
         console.log(response.data);
         console.log(response.status);
         console.log(response.headers);
         console.log(response.config);
      }
    });

  return {
    type: INITIALIZE,
    payload: request
    //R.merge(previousPageData.store.getState().droppedData, fakeData)
  };
}
