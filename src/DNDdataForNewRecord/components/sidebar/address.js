import React from 'react';
import { AddressConfig } from '../../config/DNDsourceTarget';
import RenderListOfSidebar from '../sidebar/shared/_renderListOfSidebar.js';

export default (props) => {
  const {registeredAddresses, mailingAddresses, dividendAddresses} = AddressConfig.source;

  return (
    <div>
      {RenderListOfSidebar([registeredAddresses, mailingAddresses, dividendAddresses], props)}
    </div>
        );
};
