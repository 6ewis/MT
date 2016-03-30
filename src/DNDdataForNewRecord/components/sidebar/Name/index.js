import React from 'react';
import ListOfEntityTypes from './listOfEntitTypes';
import ListOf from '../shared/_ListOfAttributes';
import _Attribute from '../shared/_attribute';


export default (props) => {
  let namesOptions = {
    attributeName: 'name',
    attributeTitle: 'Names',
    boxSourceType: 'Names',
    boxSourceComponent: _Attribute,
    ...props
  };

  let sortNamesOptions = {
   attributeName: 'sortName',
   attributeTitle: 'Sort Names',
   boxSourceType: 'Sort Names',
   boxSourceComponent: _Attribute,
   ...props
   };


  return (
    <div>
        <ListOfEntityTypes {...props}/>
        <hr/>
        <ListOf {...namesOptions}/>
        <hr/>
        <ListOf {...sortNamesOptions}/>
        <hr/>
   </div>
     );
};
