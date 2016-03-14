import React from 'react';
import EntityTypes from './entityTypes';
import Names from './names';
import SortNames from './sortNames';

import Source from '../../../containers/DND/source';

export default ({content, styleHeader, styleIconLabel}) => {
  return (
    <div>
        <Source content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
        <hr/>
        <Names content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
        <hr/>
        <SortNames content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
        <hr/>
   </div>
     );
};
