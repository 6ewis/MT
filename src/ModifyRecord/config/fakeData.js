//entityTYpe coming from the second page
 export const EntityTypes =
   [{"id": "1", "entityType": "Individual"},
    {"id": "2", "entityType": "Company"},
    {"id": "3", "entityType": "Trust"},
    {"id": "4", "entityType": "PartnerShip"}];
  //salutation coming from the second page
  //full Name coming from the second page
  //sortName coming from the second page
  export const Aliases = [
    //I'm not currently using id,cpref
    {
      "id": 4,
      "cpref": 120478,
      "alias": "Mickey Rat",
      "alias_type": "FKA"
    },
    {
      "id": 5,
      "cpref": 120478,
      "alias": "Mick Big Ears",
      "alias_type": "AKA"
    }
  ];
  export const Countries = [
    //it should be numeric_code
    {
      "id": 25,
      "numericcode": 60,
      "country_name": "Bermuda"
    },
    {
      "id": 233,
      "numericcode": 840,
      "country_name": "United States of America"
    },
    {
      "id": 39,
      "numericcode": 124,
      "country_name": "Canada"
    },
    {
      "id": 45,
      "numericcode": 156,
      "country_name": "People's Republic of China"
    },
    {
      "id": 31,
      "numericcode": 76,
      "country_name": "Brazil"
    }];

   export const billing_clients = [
    {
      "client_number": "00001",
      "matter_number": 111789,
      "client_name": "Aardvark Communications Ltd.",
      "address1": "Ben Fain",
      "address2": "Aardvark Communications",
      "address3": "P.O. Box 2086",
      "address4": "45 Victoria Street",
      "address5": "Hamilton",
      "address6": "BERMUDA"
    },
    {
      "client_number": "00002",
      "matter_number": 345455,
      "client_name": "Aberdale Limited-in Liquidation",
      "address1": "Midland Bank Trust",
      "address2": "Corporate (Jersey) Limited",
      "address3": "P.O. Box 26",
      "address4": "28/34 Hill Street,",
      "address5": "St. Helier, Jersey",
      "address6": "CHANNEL ISLANDS"
    },
    {
      "client_number": "00003",
      "matter_number": 45932,
      "client_name": "3",
      "address1": "NICOR Marine Inc.,",
      "address2": "419 RUE DECATUR",
      "address3": "NEW ORLEANS",
      "address4": "LOUISIANA  70130",
      "address5": "U.S.A.",
      "address6": "Mr.Barrett Daly"
    },
    {
      "client_number": "00004",
      "matter_number": 345502,
      "client_name": "Acme Investments Limited - Dissolved",
      "address1": "PO BOX 666",
      "address2": "HAMILTON",
      "address3": "BERMUDA",
      "address4": null,
      "address5": null,
      "address6": null
    }
  ];
