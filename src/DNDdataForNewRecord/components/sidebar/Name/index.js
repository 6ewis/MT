import React from 'react';
import { NameConfig } from '../../../config/DNDsourceTarget';
import RenderListOfSidebar from '../../sidebar/shared/_renderListOfSidebar.js';

export default (props) => {
  const {entityType, names, sortNames, salutations} = NameConfig.source;

  return (
    <div>
      {RenderListOfSidebar([entityType, names, sortNames, salutations], props)}
    </div>
         );
};
