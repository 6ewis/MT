import React, {Component} from 'react';

import Name from './accordion/name';
import Date from './accordion/date';
import Domicile from './accordion/domicile';

export default ({selectAccordion, clickX}) => {
    let dispatchSelectAccordion = selectAccordion;
    let dispatchClickX = clickX;
   
    return (
         <div role="tabpanel" className="tab-pane active" id="home">
            <br/>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
               <Name selectAccordion={ () => dispatchSelectAccordion('Names') } clickX={ dispatchClickX }/>
               <Date selectAccordion={ () => dispatchSelectAccordion('Dates') } />
               <Domicile selectAccordion={ () => dispatchSelectAccordion('Domiciles') } />
            </div>
         </div>
       );
};
