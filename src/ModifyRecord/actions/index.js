import {EntityTypes, Aliases, Countries} from '../config/fakeData';

export const INITIALIZE = 'INITIALIZE';

//1. we carry data from the second page forward
//2. we make async request to the server for the following: aliases, countries, billing client, addresses
//3. we merge both piece of info  via a serialize function
//4. we send it to the reducer
export function initialize(initialData) {
  const fakeData =
    {entityTypes: EntityTypes,
     aliases: Aliases,
     countries: Countries};

  return {
    type: INITIALIZE,
    payload: fakeData
  //payload: serializeData(content.entities)
  };
}
