import React, {Component} from 'react';
import { Accordion } from 'react-bootstrap';
import _AccordionHeader from './accordion/shared/_accordion_header.js';
import { NameConfig, DateConfig, DomicileConfig, PhoneFaxConfig, AddressConfig } from '../../config/DNDsourceTarget';

export default (props) => {
  function renderAccordionHeaders() {
    return [NameConfig, DateConfig, DomicileConfig, PhoneFaxConfig, AddressConfig].map(
      (config, index) => <_AccordionHeader key={index} {...Object.assign(config.target, props)} />
    );
  }

   return (
     <div>
       <br/>
       <Accordion defaultActiveKey='1'>
        {renderAccordionHeaders()}
       </Accordion>
     </div>
   );
};
