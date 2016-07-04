export default (props) => {
  console.log("I'm in the serializedData and the props is:", props);
  const {Type, 'Full Name': FullName, Aliases, Salutation, 'Birth Date': BirthDate,
         'Deceased Date': DeceasedDate, Nationality, Residence, Domicile, Email, Phone,
         Other, Fax} = props;
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
      "Fax": Fax
      //the rest is not currently being used
    //  "SortName": SortName,
    //  "Occupation": Occupation,
    },
    //it's not wired up yet on the review page
    //use static data for now
    compliance: {},
    //request to the server of the selectedIds and comes back with
    //the basicInfo, the addresses and the positions
    duplicatePersonToBeMerged: {}
 };
};
