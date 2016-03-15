import React, {Component} from 'react';
import EntityTypeBoxTarget from '../../../containers/DND/EntityTypeBoxTarget.js';

export default (props) => {
  return (
    <div onClick={props.onClick} className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingOne">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Names
          </a>
        </h4>
      </div>
      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div className="panel-body">
          <EntityTypeBoxTarget name="Entity Type"/>
          { /* <Dustin name="Name"/>
               <Dustin name="Sort Name"/>
           */}
        </div>
      </div>
    </div>
  );
};
