import React from 'react';
import ListOfEntityTypes from './listOfEntitTypes';
import { NameConfig } from '../../../config/DNDsourceTarget';
import RenderListOfSidebar from '../../sidebar/shared/_renderListOfSidebar.js';

export default (props) => {
  const {names, sortNames, salutations} = NameConfig.source;

  return (
    <div>
      <ListOfEntityTypes {...props}/>
      <hr/>
      {RenderListOfSidebar([names, sortNames, salutations], props)}
    </div>
         );
};
