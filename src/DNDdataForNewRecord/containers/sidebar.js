import React, {Component} from 'react';

export default (props) => {
  let styleHeader = {
    fontWeight: 'bold'
  };

  let styleIcon = {
  };

  let styleIconLabel = {
    marginBottom: '5%'
  };

  return (
    <div>
      <center>
      <br/>
      <div className="well well-lg">
        <h4 style={styleHeader}> Entity Types </h4>
          <i style={styleIcon} className="fa fa-user fa-3x"></i>
          <div style={styleIconLabel}> Individual</div>
          <i style={styleIcon} className="fa fa-building fa-3x"></i>
          <div style={styleIconLabel}> Company </div>
         <hr/>
        <h4 style={styleHeader}> Names </h4>
        John Smith (CP: 1231)
        John T. Smith (CP: 123331)
        <hr/>
        <h4 style={styleHeader}> Sort Names </h4>
        JOHN SMITH (CP: 1231)
        SMITH T JOHN (CP: 1233)
        <hr/>
      </div>
      </center>
    </div>
     );
};
