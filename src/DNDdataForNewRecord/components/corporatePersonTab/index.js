import React, {Component} from 'react';
import { Accordion } from 'react-bootstrap';
import _AccordionHeader from './accordion/shared/_accordion_header.js';
import { NameTypes, DateTypes, DomicileTypes, PhoneFaxTypes, AddressConfig } from '../../config/DNDTargetTypes';

export default (props) => {
   let Name = {
     dispatchSelectAccordionValue: 'Names',
     header: 'Names',
     dropTargetTypes: NameTypes,
     eventKey: '1',
     ...props
   };

   let Date_ = {
    dispatchSelectAccordionValue: 'Dates',
    header: 'Dates',
    eventKey: '2',
    dropTargetTypes: DateTypes,
    ...props
   };


   let Domicile = {
     dispatchSelectAccordionValue: 'Domicile/Nationality/Residence',
     header: 'Domicile/Nationality/Residence',
     eventKey: '3',
     dropTargetTypes: DomicileTypes,
     ...props
   };

   let Phone = {
     dispatchSelectAccordionValue: 'Phone/Fax',
     header: 'Phone/Fax',
     eventKey: '4',
     dropTargetTypes: PhoneFaxTypes,
     ...props
    };

   let Address = Object.assign(AddressConfig.target, props);

   return (
     <div>
       <br/>
       <Accordion defaultActiveKey='1'>
          <_AccordionHeader {...Name} />
          <_AccordionHeader {...Date_} />
          <_AccordionHeader {...Domicile} />
          <_AccordionHeader {...Phone} />
          <_AccordionHeader {...Address} />
       </Accordion>
     </div>
   );
};
