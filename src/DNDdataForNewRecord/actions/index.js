import serializeData from '../config/serializeData';
import axios from 'axios';

export const SELECT_ACCORDION = 'SELECT_ACCORDION';
export const INITIALIZE = 'INITIALIZE';
export const DROP_ITEM = 'DROP_ITEM';
export const CLICK_X = 'CLICK_X';

//Test data for development
  let first_entity = {
   "id": "1231",
  //Name
   "entity_type": "I", //real data use I for 'Individual' and 'C' for Company
   "name": "John Smith",
   "sort_name": "JOHN SMITH",
   "salutation": "Mr",
   "internal": 1,
  //Address
   //registered address
   "regaddr_line_1": "Clarendon House",
   "regaddr_line_2": "2 Church Stree",
   "regaddr_line_3": "Hamilton HM 11",
   "regaddr_line_4": " Bermuda",
   "regaddr_locality": null,
   "regaddr_region": null,
   "regaddr_postal_code": "08016",
   "regaddr_country_name": null,
   "regaddr_country_numeric_code": null,
   //mailing address
   "mailaddr_line_1": "Conyer, Dill & Pearman",
   "mailaddr_line_2": "PO. Box 666",
   "mailaddr_line_3": "Hamilton HM CX",
   "mailaddr_line_4": "Bermuda",
   "mailaddr_locality": null,
   "mailaddr_region": null,
   "mailaddr_postal_code": null,
   "mailaddr_country_name": null,
   "mailaddr_country_numeric_code:": null,
   //dividend address
   "divaddr_line_1": null,
   "divaddr_line_2": null,
   "divaddr_line_3": null,
   "divaddr_line_4": null,
   "divaddr_locality": null,
   "divaddr_region": null,
   "divaddr_postal_code": null,
   "divaddr_country_name": null,
   "divaddr_country_numeric_code:": null,
  //Dates
   "birth_date": "1942-07-12 00:00:00",
   "deceased_date": "2001-01-01 00:00:00",
  //Domicile/Nationality/Residence
   "domicile": "British Virgin Islands",
   "domicile_numeric_code": 12,
   "residence": "British Virgin Islands",
   "residence_numeric_code": 12,
   "nationality": "Italian",
   "nationality_numeric_code": 13,
  //Phone/Fax
   "phone": "555-123-7234",
   "fax": "888-834-838",
   "email": "smith@conyersdill.com",
   "telex": "425-566-193000"
    };
  
  let second_entity = {
   "id": "1234",
  //Name
   "entity_type": "C", //real data use I for 'Individual' and 'C' for Company
   "name": "Johny Moul Smith",
   "sort_name": "JOHNY S SMITH",
   "salutation": "Sr",
   "internal": 1,
  //Address
   //registers address
   "regaddr_line_1": "Circle Dr ",
   "regaddr_line_2": "2 Church Street",
   "regaddr_line_3": "Jardin HM 12",
   "regaddr_line_4": " Cayman islands",
   "regaddr_locality": null,
   "regaddr_region": null,
   "regaddr_postal_code": null,
   "regaddr_country_name": null,
   "regaddr_country_numeric_code": null,
   //mailing address
   "mailaddr_line_1": "Conyer, Dill & Pearman",
   "mailaddr_line_2": "PO. Box 777",
   "mailaddr_line_3": "Circle HM CX",
   "mailaddr_line_4": "Cayman Island",
   "mailaddr_locality": null,
   "mailaddr_region": null,
   "mailaddr_postal_code": null,
   "mailaddr_country_name": null,
   "mailaddr_country_numeric_code:": null,
   //dividend address
   "divaddr_line_1": null,
   "divaddr_line_2": null,
   "divaddr_line_3": null,
   "divaddr_line_4": null,
   "divaddr_locality": null,
   "divaddr_region": null,
   "divaddr_postal_code": null,
   "divaddr_country_name": null,
   "divaddr_country_numeric_code:": null,
  //Dates
   "birth_date": "1962-07-12 00:00:00",
   "deceased_date": "2005-01-01 00:00:00",
  //Domicile/Nationality/Residence
   "domicile": "British Virgin Islands",
   "domicile_numeric_code": 12,
   "residence": "British Virgin Islands",
   "residence_numeric_code": 12,
   "nationality": "Italian",
   "nationality_numeric_code": 13,
  //Phone/Fax
   "phone": "1-988-123-1234",
   "fax": "716-234-530",
   "email": "moulSmith@condan.ca",
   "telex": "416-999-888"
 };

  let content = {entities: [first_entity, second_entity]};

export function selectAccordion(selectedAccordion) {
  return {
    type: SELECT_ACCORDION,
    payload: selectedAccordion
  };
}

export function clickX(selectedItem) {
  console.log('Im in the action', selectedItem);
  return {
    type: CLICK_X,
    payload: selectedItem
  };
}

export function dropItem(item) {
  return {
    type: DROP_ITEM,
    payload: item
  };
}

export function initialize() {
  const initialData = "1,2,3,4,5";
  const config = {
    transformResponse: [(data) => serializeData(data)],
    responseType: 'json'
  };

   const request = axios.get(`http://172.16.130.31:3000/corporate_persons/${initialData}`, config)
    .catch((response) => {
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
  //payload: serializeData(content.entities)
  };
}
