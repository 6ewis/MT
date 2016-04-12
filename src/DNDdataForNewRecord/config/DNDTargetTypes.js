import _Attribute from '../components/sidebar/shared/_attribute.js';

export const NameTypes = ['Entity Types', 'Names', 'Sort Names'];
export const DateTypes = ['Birth Dates', 'Death Dates'];
export const DomicileTypes = ['Domiciles', 'Nationalities', 'Residences'];
export const PhoneFaxTypes = ['Phones', 'Faxes', 'Emails', 'Telexes'];

const AddressTypes = ['Registered Address', 'Mailing Address', 'Dividend Address'];
const [RegisteredAddress, MailingAddress, DividendAddress] = AddressTypes;

export const AddressConfig = {
  //sidebar source
  source: {
   attributeName: 'concatenated_registered_address',
   attributeTitle: 'Registered Address',
   boxSourceType: RegisteredAddress,
   boxSourceComponent: _Attribute
  },
  //accordion target
  target: {
   //property to dispatch action to redux
   dispatchSelectAccordionValue: 'Address',
   //properties needed for react-bootstrap
   header: 'Address',
   eventKey: '5',
   //property for the BoxTarget
   dropTargetTypes: AddressTypes
  }
};
