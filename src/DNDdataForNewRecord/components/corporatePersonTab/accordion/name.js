import React, {Component} from 'react';
import Dustbin from './shared/dustbin';
import _BoxTarget from '../../../containers/DND/_BoxTarget';

export default (props) => {
  function renderDropTargetOf(Type, Element, newProp) {
    return React.createElement(_BoxTarget(Type, Element), newProp);
  }

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
          {renderDropTargetOf('Entity Type', Dustbin, {name: 'Entity Type'})}
          {renderDropTargetOf('Name', Dustbin, {name: 'Name'})}
          {renderDropTargetOf('Sort Name', Dustbin, {name: 'Sort Name'})}
        </div>
      </div>
    </div>
  );
};
