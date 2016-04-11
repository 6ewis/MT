import React, {Component} from 'react';
import StateOfCorporatePersonTab from '../containers/stateOfCorporatePersonTab';

export default (props) => {
  return (
    <div>
      {/* <!-- Nav tabs --> */}
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><h4>Corporate Person</h4></a></li>
      </ul>
      {/*<!-- Tab panes --> */}
      <div className="tab-content">
        <StateOfCorporatePersonTab />
      </div>
     </div>
  );
};
