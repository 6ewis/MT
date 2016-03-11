import React, {Component} from 'react';
import Dustin from '../../../containers/dustbin';

export default (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingOne">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Names
          </a>
        </h4>
      </div>
      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div className="panel-body">
          <Dustin name="Entity Type"/>
          <Dustin name="Name"/>
          <Dustin name="Sort Name"/>
        </div>
      </div>
    </div>
  );
};
