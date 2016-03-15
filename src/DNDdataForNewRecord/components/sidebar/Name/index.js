import React from 'react';
import ListOfEntityTypes from './listOfEntitTypes';
import ListOfNames from './listOfNames';
import ListOfSortNames from './listOfSortNames';

export default ({content, styleHeader, styleIconLabel}) => {
  return (
    <div>
        <ListOfEntityTypes content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
        <hr/>
        <ListOfNames content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
        <hr/>
        <ListOfSortNames content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
        <hr/>
   </div>
     );
};
