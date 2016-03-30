import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';

export default (props) => {
  let phonesOptions = {
    attributeName: 'phone',
    attributeTitle: 'Phones',
    boxSourceType: 'Phones',
    boxSourceComponent: _Attribute,
    ...props
  };

  let faxesOptions = {
   attributeName: 'fax',
   attributeTitle: 'Faxes',
   boxSourceType: 'Faxes',
   boxSourceComponent: _Attribute,
   ...props
   };

  return (
    <div>
        <ListOf {...phonesOptions}/>
        <hr/>
        <ListOf {...faxesOptions}/>
        <hr/>
    </div>
     );
};
