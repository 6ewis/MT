import axios from 'axios';

export default (props) => {
  const {addressesContainer, Type, 'Full Name': FullName, Aliases, Salutation, 'Birth Date': BirthDate,
         'Deceased Date': DeceasedDate, Nationality, Residence, Domicile, Email, Phone,
         Other, Fax, selectedIds} = props;

  console.log('im in the serializeData.js', props);
  const request = axios.get(`http://cpmtdev01.codandev.local:3000/corporate_persons/${selectedIds}`)
    .catch(response => {
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
    newCorporatePerson: {
      "EntityType": Type,
      //ConyersEmployee is not yet available
      "Name": FullName,
      "Aliases": Aliases,
      "Title": Salutation,
      "Birth Date": BirthDate,
      "Deceased Date": DeceasedDate,
      "Nationality": Nationality,
      "Residence": Residence,
      "Domicile": Domicile,
      "Email": Email,
      "Phone": Phone,
      "Telex": Other,
      "Fax": Fax,
      "addressesContainer": addressesContainer
      //the rest is not currently being used
    //  "SortName": SortName,
    //  "Occupation": Occupation,
    },
    //it's not wired up yet on the review page
    //use static data for now
    compliance: {},
    //request to the server of the selectedIds and comes back with
    //the basicInfo, the addresses and the positions
    duplicatePersonToBeMerged: {...request}
 };
};
