import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';

export default (props) => {
  let birthDatesOptions = {
    attributeName: 'birthDate',
    attributeTitle: 'Birth Dates',
    boxSourceType: 'Birth Dates',
    boxSourceComponent: _Attribute,
    ...props
  };

  let deathDatesOptions = {
   attributeName: 'deathDate',
   attributeTitle: 'Death Dates',
   boxSourceType: 'Death Dates',
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
