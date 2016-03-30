import React, {Component} from 'react';
import { Accordion } from 'react-bootstrap';
import _AccordionHeader from './accordion/shared/_accordion_header.js';

export default (props) => {
   let Name = {
     dispatchSelectAccordionValue: 'Names',
     header: 'Names',
     dropTargetTypes: ['Entity Types', 'Names', 'Sort Names'],
     eventKey: '1',
     ...props
   };

   let Date_ = {
    dispatchSelectAccordionValue: 'Dates',
    header: 'Dates',
    eventKey: '2',
    dropTargetTypes: ['Birth Dates', 'Death Dates'],
    ...props
   };


   let Domicile = {
     dispatchSelectAccordionValue: 'Domicile/Nationality/Residence',
     header: 'Domicile/Nationality/Residence',
     eventKey: '3',
     dropTargetTypes: ['Domiciles', 'Nationalities', 'Residences'],
     ...props
   };

   let Phone = {
     dispatchSelectAccordionValue: 'Phone/Fax',
     header: 'Phone/Fax',
     eventKey: '4',
     dropTargetTypes: ['Phones', 'Faxes'],
     ...props
    };

   let Address = {
     dispatchSelectAccordionValue: 'Address',
     header: 'Address',
     eventKey: '5',
     dropTargetTypes: ['Cities', 'Provinces', 'ZipCodes', 'Countries'],
     ...props
   };

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
