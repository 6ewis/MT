import React from 'react';
import { PhoneFaxConfig } from '../../config/DNDsourceTarget';
import RenderListOfSidebar from '../sidebar/shared/_renderListOfSidebar.js';

export default (props) => {
  const {phones, faxes, email, telex} = PhoneFaxConfig.source;

  return (
    <div>
      {RenderListOfSidebar([phones, faxes, email, telex], props)}
    </div>
     );
};
