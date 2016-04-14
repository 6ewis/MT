import React from 'react';
import CurrentSidebarContent from '../../containers/currentSidebarContent';

export default (props) => {
  const styleHeader = {
    fontWeight: 'bold'
  };

  const styleCursor = {
    cursor: 'pointer'
  };

  const style = {styleHeader, styleCursor};

  return (
    <div style={{overflow: 'scroll'}}>
      <center>
      <br/>
      <div className="well well-lg">
        <div>
        <CurrentSidebarContent {...style}/>
        </div>
      </div>
      </center>
   </div>
     );
};
