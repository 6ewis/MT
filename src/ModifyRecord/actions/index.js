import {BillingClients, Aliases, Countries} from '../config/fakeData';
import R from 'ramda';

export const INITIALIZE = 'INITIALIZE';

//1. we carry data from the second page forward
//2. we make async request to the server for the following: aliases, countries, billing client, addresses
//3. we merge both piece of info  via a serialize function
//4. we send it to the reducer
export function initialize(storeOfPreviousPage) {
  console.log('the initialdata is:', storeOfPreviousPage);
  const fakeData =
    {
     aliases: Aliases,
     countries: Countries,
     billing_clients: BillingClients
   };

  return {
    type: INITIALIZE,
    payload: R.merge(storeOfPreviousPage.getState().droppedData, fakeData)
  //payload: serializeData(content.entities)
  };
}
