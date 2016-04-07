import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';
import { PhoneFaxTypes } from '../../config/DNDTargetTypes';

let [phoneTypes, faxTypes] = PhoneFaxTypes; //Bad Name

export default (props) => {
  let phonesOptions = {
    attributeName: 'phone',
    attributeTitle: 'Phones',
    boxSourceType: phoneTypes,
    boxSourceComponent: _Attribute,
    ...props
  };

  let faxesOptions = {
   attributeName: 'fax',
   attributeTitle: 'Faxes',
   boxSourceType: faxTypes,
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
