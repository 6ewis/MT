import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';

export default (props) => {
  let domicilesOptions = {
    attributeName: 'domicile',
    attributeTitle: 'Domiciles',
    boxSourceType: 'Domiciles',
    boxSourceComponent: _Attribute,
    ...props
  };

  let nationalitiesOptions = {
   attributeName: 'nationality',
   attributeTitle: 'Nationalities',
   boxSourceType: 'Nationalities',
   boxSourceComponent: _Attribute,
   ...props
   };

  let residencesOptions = {
   attributeName: 'residence',
   attributeTitle: 'Residences',
   boxSourceType: 'Residences',
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
