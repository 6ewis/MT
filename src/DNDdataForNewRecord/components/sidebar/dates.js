import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';
import { DateTypes } from '../../config/DNDTargetTypes';

let [birthDateType, deceasedDateType] = DateTypes;

export default (props) => {
  let birthDatesOptions = {
    attributeName: 'birth_date',
    attributeTitle: 'Birth Dates',
    boxSourceType: birthDateType,
    boxSourceComponent: _Attribute,
    ...props
  };

  let deathDatesOptions = {
   attributeName: 'death_date',
   attributeTitle: 'Death Dates',
   boxSourceType: deceasedDateType,
   boxSourceComponent: _Attribute,
   ...props
   };

  return (
    <div>
        <ListOf {...birthDatesOptions}/>
        <hr/>
        <ListOf {...deathDatesOptions}/>
        <hr/>
    </div>
     );
};
