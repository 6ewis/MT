import React from 'react';
import {Row, SplitButton, Button, MenuItem} from 'react-bootstrap';

import _Label from './shared/_label';
import _SplitButton from './shared/_splitButton';

export default ({data, fieldName}) => {
  return (
    <div>
      <Row>
        <_Label name="Aliases" />
      </Row>
      <Row className="form-inline" style={{marginBottom: '0.2%'}}>
         <_SplitButton data={data} fieldName="alias"/>
         &nbsp; <input type="text" className="form-control"/>
         &nbsp; <i className="fa fa-minus-circle makeItRed" ariaHidden="true"></i>
      </Row>
      <Row className="form-inline">
        <_SplitButton data={data} fieldName="alias"/>
        &nbsp; <input type="text" className="form-control" />
        &nbsp; <i className="fa fa-minus-circle makeItRed" ariaHidden="true"></i>
      </Row>
      <br/>
      <Row>
        <Button bsStyle="primary">Add Alias</Button>
      </Row>
      <br/>
    </div>
  );
};
