export const INITIALIZE = 'INITIALIZE';

const data = {
 "entityTypes": [{"id": "1", "entityType": "Individual"}, 
                 {"id": "2", "entityType": "Company"}, 
                 {"id": "3", "entityType": "Trust"}, 
                 {"id": "4", "entityType": "PartnerShip"}],
 "aliases": [{"id": "1", "alias": "AKA"}, 
             {"id": "2", "alias": "FKA"}],
 "countries": [{"id": "1", "country": "CA"}, 
               {"id": "2", "country": "USA"}],
 "billing_client": [
   {"id": "1", client_number: "000789", client_name: "Avoradk Communications ltd"},
   {"id": "2", client_number: "000531", client_name: "Apple Inc"},
   {"id": "3", client_number: "000119", client_name: "Amazon corporation"},
   {"id": "4", client_number: "000239", client_name: "Alphabet Inc"}
 ]
};

//1. we carry data from the second page forward
//2. we make async request to the server for the following: aliases, countries, billing client
//3. we merge both piece of info  via a serialize function
//4. we send it to the reducer
export function initialize(initialData) {
  return {
    type: INITIALIZE,
    payload: data
  //payload: serializeData(content.entities)
  };
}
