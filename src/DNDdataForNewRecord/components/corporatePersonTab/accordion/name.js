import React, {Component} from 'react';
import Dustbin from './shared/dustbin';
import _BoxTarget from '../../../containers/DND/_BoxTarget';

export default ({selectAccordion, clickX}) => {
  function renderDropTargetOf(Type, Element, newProp) {
    return React.createElement(_BoxTarget(Type, Element), newProp);
  }

  return (
    <div onClick={selectAccordion} className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingOne">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Names
          </a>
        </h4>
      </div>
      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div className="panel-body">
          {renderDropTargetOf('Entity Type', Dustbin, {title: 'Entity Type', clickX: clickX})}
          {renderDropTargetOf('Name', Dustbin, {title: 'Name', clickX: clickX})}
          {renderDropTargetOf('Sort Name', Dustbin, {title: 'Sort Name', clickX: clickX})}
        </div>
      </div>
    </div>
  );
};
