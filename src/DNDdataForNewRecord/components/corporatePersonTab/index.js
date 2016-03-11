import React, {Component} from 'react';

import Name from './accordion/name';
import Date from './accordion/date';
import Domicile from './accordion/domicile';

export default (props) => {
  return (
       <div role="tabpanel" className="tab-pane active" id="home">
          <br/>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
             <Name />
             <Date />
             <Domicile />
          </div>
       </div>
     );
};
