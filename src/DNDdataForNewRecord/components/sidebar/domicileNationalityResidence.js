import React from 'react';
import { DomicileConfig } from '../../config/DNDsourceTarget';
import RenderListOfSidebar from '../sidebar/shared/_renderListOfSidebar.js';


export default (props) => {
  const {domiciles, nationalities, residences} = DomicileConfig.source;

  return (
    <div>
      {RenderListOfSidebar([domiciles, nationalities, residences], props)}
    </div>
     );
};
