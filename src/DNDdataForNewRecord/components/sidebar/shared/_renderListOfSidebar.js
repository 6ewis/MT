import React from 'react';
import ListOf from '../shared/_ListOfAttributes.js';
//remove s?

export default (arrayOfMainAttributes, props) => {
   function renderListOfSidebar() {
    return arrayOfMainAttributes.map(
      (item, index) => <div key={index}><ListOf {...Object.assign(item, props)}/><hr/></div>
    );
  }

  return (
    <div>
      {renderListOfSidebar()}
    </div>
     );
};
