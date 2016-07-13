export default (props) => {
  const {addressesContainer, Type, 'Full Name': FullName, 'Sort Name': SortName, Aliases, Salutation, 'Birth Date': BirthDate,
         'Deceased Date': DeceasedDate, Nationality, Residence, Domicile, Email, Phone,
         Other, Fax, duplicatePersonToBeMerged} = props;

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
      "addressesContainer": addressesContainer,
      "SortName": SortName
      //the rest is not currently being used
      //  "Occupation": Occupation,
    },
    //it's not wired up yet on the review page
    //use static data for now
    compliance: {},
    duplicatePersonToBeMerged: {...duplicatePersonToBeMerged}
 };
};
