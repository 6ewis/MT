import React, { Component } from 'react';
import CurrentlySelectedEntities from './currentlySelectedEntities';

export default (props) => {
   return (
     <div className="col-md-2">
       <br/>
       <br/>
       <div className="jumbotron" style={{padding: '5px'}}>
         <div className="list-group">
           <CurrentlySelectedEntities />
         </div>
       </div>
     </div>
        );
};
