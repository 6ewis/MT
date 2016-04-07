import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';
import { DomicileTypes } from '../../config/DNDTargetTypes';

let [domicileTypes, nationalityTypes, residenceTypes] = DomicileTypes;

export default (props) => {
  let domicilesOptions = {
    attributeName: 'domicile',
    attributeTitle: 'Domiciles',
    boxSourceType: domicileTypes,
    boxSourceComponent: _Attribute,
    ...props
  };

  let nationalitiesOptions = {
   attributeName: 'nationality',
   attributeTitle: 'Nationalities',
   boxSourceType: nationalityTypes,
   boxSourceComponent: _Attribute,
   ...props
   };

  let residencesOptions = {
   attributeName: 'residence',
   attributeTitle: 'Residences',
   boxSourceType: residenceTypes,
   boxSourceComponent: _Attribute,
   ...props
   };

  return (
    <div>
        <ListOf {...domicilesOptions}/>
        <hr/>
        <ListOf {...nationalitiesOptions}/>
        <hr/>
        <ListOf {...residencesOptions}/>
        <hr/>
    </div>
     );
};
