import _Attribute from '../components/sidebar/shared/_attribute';
import EntityType from '../components/sidebar/Name/entityType';

//Name
const NameTypes = ['Entity Types', 'Names', 'Sort Names', 'Salutation'];
const [entityType, nameType, sortNameType, salutationType] = NameTypes;

export const NameConfig = {
  //sidebar source
  source: {
   // entityType: {
   //  attributeName: 'entity_type',
   //  attributeTitle: 'Entity Types',
   //  boxSourceType: entityType,
   //  boxSourceComponent: EntityType
   // },
    names: {
     attributeName: 'name',
     attributeTitle: 'Names',
     boxSourceType: nameType,
     boxSourceComponent: _Attribute
    },
    sortNames: {
      attributeName: 'sort_name',
      attributeTitle: 'Sort Names',
      boxSourceType: sortNameType,
      boxSourceComponent: _Attribute
    },
    salutations: {
      attributeName: 'salutation',
      attributeTitle: 'Salutation',
      boxSourceType: salutationType,
      boxSourceComponent: _Attribute
    }

  },
  //accordion target
  target: {
   //property to dispatch action to redux
    dispatchSelectAccordionValue: 'Names',
   //properties needed for react-bootstrap
    header: 'Names',
    eventKey: '1',
   //property for the BoxTarget
    dropTargetTypes: NameTypes
  }
};

//Date
const DateTypes = ['Birth Dates', 'Death Dates'];
const [birthDateType, deceasedDateType] = DateTypes;

export const DateConfig = {
  source: {
    birthDates: {
      attributeName: 'birth_date',
      attributeTitle: 'Birth Dates',
      boxSourceType: birthDateType,
      boxSourceComponent: _Attribute
    },
    deathDates: {
      attributeName: 'deceased_date',
      attributeTitle: 'Death Dates',
      boxSourceType: deceasedDateType,
      boxSourceComponent: _Attribute
    }
  },
  target: {
    dispatchSelectAccordionValue: 'Dates',
    header: 'Dates',
    eventKey: '2',
    dropTargetTypes: DateTypes
  }
};

//Domicile
const DomicileTypes = ['Domiciles', 'Nationalities', 'Residences'];
const [domicileTypes, nationalityTypes, residenceTypes] = DomicileTypes;

export const DomicileConfig = {
  source: {
    domiciles: {
      attributeName: 'domicile',
      attributeTitle: 'Domiciles',
      boxSourceType: domicileTypes,
      boxSourceComponent: _Attribute
    },
    nationalities: {
      attributeName: 'nationality',
      attributeTitle: 'Nationalities',
      boxSourceType: nationalityTypes,
      boxSourceComponent: _Attribute
    },
    residences: {
       attributeName: 'residence',
       attributeTitle: 'Residences',
       boxSourceType: residenceTypes,
       boxSourceComponent: _Attribute
    }
  },
  target: {
    dispatchSelectAccordionValue: 'Domicile/Nationality/Residence',
    header: 'Domicile/Nationality/Residence',
    eventKey: '3',
    dropTargetTypes: DomicileTypes
  }
};

//Phone/Fax
const PhoneFaxTypes = ['Phones', 'Faxes', 'Emails', 'Telexes'];
const [phoneTypes, faxTypes, emailTypes, telexTypes] = PhoneFaxTypes;

export const PhoneFaxConfig = {
  source: {
    phones: {
      attributeName: 'phone',
      attributeTitle: 'Phones',
      boxSourceType: phoneTypes,
      boxSourceComponent: _Attribute
    },
    faxes: {
      attributeName: 'fax',
      attributeTitle: 'Faxes',
      boxSourceType: faxTypes,
      boxSourceComponent: _Attribute
    },
    email: {
      attributeName: 'email',
      attributeTitle: 'Emails',
      boxSourceType: emailTypes,
      boxSourceComponent: _Attribute
    },
    telex: {
      attributeName: 'telex',
      attributeTitle: 'Telexes',
      boxSourceType: telexTypes,
      boxSourceComponent: _Attribute
      }
  },
  target: {
    dispatchSelectAccordionValue: 'Phone/Fax',
    header: 'Phone/Fax',
    eventKey: '4',
    dropTargetTypes: PhoneFaxTypes
  }
};

//Address
const AddressTypes = ['Registered Address', 'Mailing Address', 'Dividend Address'];
const [RegisteredAddress, MailingAddress, DividendAddress] = AddressTypes;

export const AddressConfig = {
  source: {
    registeredAddresses: {
      attributeName: 'concatenated_registered_address',
      attributeTitle: 'Registered Address',
      boxSourceType: RegisteredAddress,
      boxSourceComponent: _Attribute
    },
    mailingAddresses: {
      attributeName: 'concatenated_mailing_address',
      attributeTitle: 'Mailing Address',
      boxSourceType: MailingAddress,
      boxSourceComponent: _Attribute
    },
    dividendAddresses: {
      attributeName: 'concatenated_dividend_address',
      attributeTitle: 'Dividend Address',
      boxSourceType: DividendAddress,
      boxSourceComponent: _Attribute
    }
  },
  target: {
   dispatchSelectAccordionValue: 'Address',
   header: 'Address',
   eventKey: '5',
   dropTargetTypes: AddressTypes
  }
};
