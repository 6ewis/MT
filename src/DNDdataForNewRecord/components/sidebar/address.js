import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import _Attribute from './shared/_attribute';

export default (props) => {
  let citiesOptions = {
    attributeName: 'city',
    attributeTitle: 'Cities',
    boxSourceType: 'Cities',
    boxSourceComponent: _Attribute,
    ...props
  };

  let provincesOptions = {
   attributeName: 'province',
   attributeTitle: 'Provinces',
   boxSourceType: 'Provinces',
   boxSourceComponent: _Attribute,
   ...props
   };

  let zipCodesOptions = {
   attributeName: 'zip_code',
   attributeTitle: 'ZipCodes',
   boxSourceType: 'ZipCodes',
   boxSourceComponent: _Attribute,
   ...props
   };

  let countriesOptions = {
    attributeName: 'country',
    attributeTitle: 'Countries',
    boxSourceType: 'Countries',
    boxSourceComponent: _Attribute,
    ...props
    };


  return (
    <div>
      <ListOf {...citiesOptions}/>
      <hr/>
      <ListOf {...provincesOptions}/>
      <hr/>
      <ListOf {...zipCodesOptions}/>
      <hr/>
      <ListOf {...countriesOptions}/>
      <hr/>
    </div>
     );
};
