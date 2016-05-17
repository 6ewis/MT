import React, {Component} from 'react';
import Calendar from 'react-input-calendar';
import {Row} from 'react-bootstrap';
import _Label from './shared/_label';

export default (props) => {
  const renderDate = () => {
    return (
       <div>
         <Row>
           <_Label name={props.title} />
         </Row>
         <Row>
           <Calendar format="DD/MM/YYYY" date={props.defaultValue} />
         </Row>
         <br/>
      </div>
    );
  };

  return renderDate();
};
