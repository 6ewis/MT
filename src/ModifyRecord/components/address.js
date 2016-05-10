import React, {Component} from 'react';
//Shared Components
import AddressContainer from './address_container';

export default ({mailingAddressFields, registeredAddressFields, dividendAddressFields}) => {
      //I most likely don't need it anymore
          // //this is for addresses - will be extracted in its own component- WIP
          // const onlyTheRegisteredAddresses = R.filter( R.propEq('address_type', 'Registered'), matter_specific_addresses);
          // const returnEntitySpecificOption = (item) =>
          //   `${item.client_name} (M#${item.matter}) \n
          //    ${item.positions}`;
          // const options = R.map(returnEntitySpecificOption, onlyTheRegisteredAddresses);
  const renderAllAddresses = () => {
    return [{obj: mailingAddressFields, defaultSelection: "Mailing"},
            {obj: registeredAddressFields, defaultSelection: "Registered"},
            {obj: dividendAddressFields, defaultSelection: "Dividend"}].map((item, index) =>
      item === undefined ?
        null :
        <AddressContainer key={index}
          {...Object.assign({defaultSelection: item.defaultSelection}, item.obj)} />
    );
  };

  return (
    <div>{renderAllAddresses()}</div>
  );
};
