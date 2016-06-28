import React from 'react';
import {Row} from 'react-bootstrap';
import _SplitButton from '../../smart/shared/_splitButton';
import _Label from './_label';

export default (props) => {
 return (
    <Row>
      <_Label name={props.label}/>
      <div>
        <_SplitButton {...props}/>
      </div>
      <br/>
    </Row>
  );
};
