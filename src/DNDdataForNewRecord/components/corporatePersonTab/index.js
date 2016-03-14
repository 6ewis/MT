import React, {Component} from 'react';

import Name from './accordion/name';
import Date from './accordion/date';
import Domicile from './accordion/domicile';

export default (props) => {
    let dispatchSelectAccordion = props.selectAccordion;

    return (
         <div role="tabpanel" className="tab-pane active" id="home">
            <br/>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
               <Name onClick={ () => dispatchSelectAccordion('Names') } />
               <Date onClick={ () => dispatchSelectAccordion('Dates') } />
               <Domicile onClick={ () => dispatchSelectAccordion('Domiciles') } />
            </div>
         </div>
       );
};
