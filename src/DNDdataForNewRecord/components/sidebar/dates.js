import React from 'react';
import { DateConfig } from '../../config/DNDsourceTarget';
import RenderListOfSidebar from '../sidebar/shared/_renderListOfSidebar.js';

export default (props) => {
  const {birthDates, deathDates} = DateConfig.source;

  return (
    <div>
      {RenderListOfSidebar([birthDates, deathDates], props)}
    </div>
         );
};
