import React from 'react';
import BirthDates from './birthDates';
import DeathDates from './deathDates';

export default (props) => {
  return (
    <div>
        <BirthDates {...props}/>
        <hr/>
        <DeathDates {...props}/>
        <hr/>
   </div>
     );
};
