import React, {Component} from 'react';
import StateOfCorporatePersonTab from '../containers/stateOfCorporatePersonTab';

export default (props) => {
  return (
    <div>
      {/* <!-- Nav tabs --> */}
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><h4>Corporate Person</h4></a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><h4>ShareHolder</h4></a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><h4>Director</h4></a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><h4><i className="fa fa-plus"></i>
          </h4></a></li>
      </ul>
      {/*<!-- Tab panes --> */}
      <div className="tab-content">
        <StateOfCorporatePersonTab />

        <div role="tabpanel" className="tab-pane" id="profile">
         ShareHolder Content
        </div>
        <div role="tabpanel" className="tab-pane" id="messages">
         Director Content
        </div>
        <div role="tabpanel" className="tab-pane" id="settings">
        Position Specific Content
        </div>
      </div>
     </div>
  );
};
