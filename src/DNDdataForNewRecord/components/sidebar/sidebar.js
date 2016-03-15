import React from 'react';
import CurrentSidebarContent from '../../containers/currentSidebarContent';

export default (props) => {
  let styleHeader = {
    fontWeight: 'bold'
  };

  let styleIconLabel = {
    marginBottom: '5%'
  };

  return (
    <div>
      <center>
      <br/>
      <div className="well well-lg">
        <CurrentSidebarContent />
      </div>
      </center>
   </div>
     );
};
