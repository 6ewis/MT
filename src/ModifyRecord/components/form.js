import React, {Component } from 'react';
import {Row, Col, Input, ButtonInput, SplitButton, MenuItem, Button} from 'react-bootstrap';
//Fields
import DateInput from './dateInput';
import _SplitButton from './shared/_splitButton';
import _InputText from './shared/_inputText';
import _Label from './shared/_label';

export default () => {
 return (
  <Col md={12}>
   <form>
      <_SplitButton label="Type" data={["Individual", "Company", "trust"]} />
      <_InputText label="Salutation" />
      <_InputText label="Full Name" />
      <_InputText label="Sort Name" />
      <_Label name="Aliases" />
     
      <Row className="form-inline" style={{marginBottom: '0.2%'}}>
        <SplitButton bsStyle='default' title='AKA' id='split-button-basic-1'>
           <MenuItem eventKey="1">OKA</MenuItem>
           <MenuItem divider />
           <MenuItem eventKey="4">OR</MenuItem>
        </SplitButton>
        &nbsp; <input type="text" className="form-control"/>
        &nbsp; <i className="fa fa-minus-circle makeItRed" ariaHidden="true"></i>
      </Row>
      <Row className="form-inline">
        <SplitButton bsStyle='default' title='FKA' id='split-button-basic-1'>
          <MenuItem eventKey="1">OKA</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">OR</MenuItem>
        </SplitButton> 
        &nbsp;&nbsp;
        <input type="text" className="form-control" />
        &nbsp; <i className="fa fa-minus-circle makeItRed" ariaHidden="true"></i>
      </Row> 

      <br/> 
      <Row>
        <Button bsStyle="primary">Add Alias</Button>
      </Row>

      <br/>
      <Row>
        <Input type="text" label="Billing Client"/>
      </Row>
        
      <Row>
        <label className="control-label">Nationality</label>   
      </Row>
      <Row>
        <SplitButton bsStyle='default' title='Nationality' id='split-button-basic-1'>
         <MenuItem eventKey="1">Company</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
      </Row>
      
      <br/>
      <Row>
        <label className="control-label">Residence</label>   
      </Row>
      <Row>
         <SplitButton bsStyle='default' title='Residence' id='split-button-basic-1'>
          <MenuItem eventKey="1">Company</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
      </Row>

      <br/>
      <Row>
        <label className="control-label">Domicile</label>   
      </Row>
      <Row>
        <SplitButton bsStyle='default' title='Domicile' id='split-button-basic-1'>
          <MenuItem eventKey="1">Company</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
      </Row>

      <br/>
      <Row>
        <Input type="text" label="Occupation"/>
      </Row>

      <DateInput title="Birth Date"/>
      <DateInput title="Deceased Date"/>

  </form>
</Col>
 );
};
