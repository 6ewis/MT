import React from 'react';
import CurrentSidebarContent from '../../containers/currentSidebarContent';

export default (props) => {
  let styleHeader = {
    fontWeight: 'bold'
  };

  let styleIconLabel = {
    marginBottom: '5%'
  };

  let styleCursor = {
    cursor: 'pointer'
  };

  let style = {styleHeader, styleIconLabel, styleCursor};

  return (
    <div>
      <center>
      <br/>
      <div className="well well-lg">
        <CurrentSidebarContent {...style}/>
      </div>
      </center>
   </div>
     );
};
