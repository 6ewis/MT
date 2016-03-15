import React from 'react';
import ListOfEntityTypes from './listOfEntitTypes';
import ListOfNames from './listOfNames';
import ListOfSortNames from './listOfSortNames';

export default (props) => {
  return (
    <div>
        <ListOfEntityTypes {...props}/>
        <hr/>
        <ListOfNames {...props}/>
        <hr/>
        <ListOfSortNames {...props}/>
        <hr/>
   </div>
     );
};
