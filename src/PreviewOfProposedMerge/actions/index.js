//third party lib
import axios from 'axios';
import R from 'ramda';
//utility functions
import serializeData from '../components/utility/serializeData';
import serializeDuplicatesPersonToBeMerged from '../../DNDdataForNewRecord/config/serializeData';

export const INITIALIZE = 'INITIALIZE';

export function initialize(previousPageData) {
 ///transform the data
 //Test data for development
   const first_entity = {
    "id": 1231,
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

   const second_entity = {
    "id": 1234,
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

 const fetchedCorporatePersonFromServerBasedOnCpref = [first_entity, second_entity];
 const fetchedPositionsFromServer = [
     {
       "matter": "760840         ",
       "client_name": "Abax Genesis Capital",
       "manager": "Taylor Swift",
       "cpref": 1234,
       "positions": " Director"
     },
     {
       "matter": "760455",
       "client_name": "Universe Thanks Ltd",
       "manager": "Kim Kardashian",
       "cpref": 1234,
       "positions": "Vice President"
     },
     {"matter": "760494         ",
      "client_name": "AGC Asia 5 Ltd.",
      "manager": "Donald Trump",
      "cpref": 1231,
      "positions": " Director"
  }];
  const {store} = previousPageData;
  const {updatedFormContent, initialFormContent} = store.getState();
  const {selectedIds} = initialFormContent;

//the fake duplcatePersonToBEmerged returns an array instead of an object
//  const getCorrespondingObjectBasedOnCpref = item => R.filter(R.propEq('cpref', item.id))(fetchedPositionsFromServer);
//  const mergePosition = item => R.merge(item, {positions: getCorrespondingObjectBasedOnCpref(item)});
//  const mergedPositionsToFetchedCorporatePerson = R.map(mergePosition, fetchedCorporatePersonFromServerBasedOnCpref);
//  const fakeData = {
//      newCorporatePerson: {
//       "EntityType": "Individual",
//       //ConyersEmployee is not yet available
//       "Name": "John",
//       "Aliases": "JD",
//       "Title": "Mr",
//       "Birth Date": "1989/12/30",
//       "Deceased Date": "n/a",
//       "Nationality": "Canadian",
//       "Residence": "Canada",
//       "Domicile": "Canada",
//       "Email": "johndoe@cornyersdill.com",
//       "Phone": "888-123-1234",
//       "Telex": "888-123-1234",
//       "Fax": "888-123-1232",
//       "addressesContainer": {},
//       "SortName": 'john doe'
//       //the rest is not currently being used
//       //  "Occupation": Occupation,
//    },
//    //it's not wired up yet on the review page
//    //use static data for now
//    compliance: {},
//    duplicatePersonToBeMerged: serializeDuplicatesPersonToBeMerged(mergedPositionsToFetchedCorporatePerson)
// };

  const getCorporatePersons = () => axios.get(`http://cpmtdev01.codandev.local:3000/corporate_persons/${selectedIds}`);
  const positions = () => axios.get(`http://cpmtdev01.codandev.local:3000/positions/${selectedIds}`);

  const request = axios.all([getCorporatePersons(), positions()]).then(
    axios.spread((corporatePersons, positions) => {
      const getCorrespondingObjectBasedOnCpref = item => R.filter(R.propEq('cpref', item.id))(positions.data.positions);
      const mergePosition = item => R.merge(item, {positions: getCorrespondingObjectBasedOnCpref(item)});
      const mergedPositionsToFetchedCorporatePerson = R.map(mergePosition, corporatePersons.data);
      return serializeData( R.merge(updatedFormContent, {duplicatePersonToBeMerged: serializeDuplicatesPersonToBeMerged(mergedPositionsToFetchedCorporatePerson)}));
  })).catch(response => {
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
    //payload: fakeData
    payload: request
  };
}
