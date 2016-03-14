import React from 'react';
import CurrentSidebarContent from './currentSidebarContent';

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
      { /* <NameSidebar content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/> */ }
        <CurrentSidebarContent />
      </div>
      </center>
   </div>
     );
};
