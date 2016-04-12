import React from 'react';
import ListOf from './shared/_ListOfAttributes';
import { AddressConfig } from '../../config/DNDTargetTypes';

export default (props) => {
  const registeredAddress = Object.assign(AddressConfig.source, props);

  return (
    <div>
      <ListOf {...registeredAddress}/>
      <hr/>
   </div>
        );
};
