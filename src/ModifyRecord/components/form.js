import React, {Component } from 'react';
import {Row, Col, Input, ButtonInput, SplitButton, MenuItem, Button} from 'react-bootstrap';
import DateInput from './dateInput';

export default () => {
 return (
  <Col md={12}>
   <form>
      <Row>
        <label className="control-label">Type</label>   
          <div>
            <SplitButton bsStyle='default' title='Individual' id='split-button-basic-1'>
              <MenuItem eventKey="1">Company</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
          </div>
     </Row>
    
      
      <br/>
      <Row>
        <Input type="text" label="Salutation"/>
        <Input type="text" label="Full Name" />
        <Input type="text" label="Sort Name" />
      </Row>
      
      <Row>
        <label className="control-label">Aliases</label> 
      </Row>

      <Row>
        <SplitButton bsStyle='default' title='AKA' id='split-button-basic-1' style={{display: 'inline-block'}}>
           <MenuItem eventKey="1">OKA</MenuItem>
           <MenuItem divider />
           <MenuItem eventKey="4">OR</MenuItem>
         </SplitButton>
       &nbsp;
         <input type="text" className="form-control" style={{display: 'inline-block'}}/>
       &nbsp; <i className="fa fa-minus-circle" ariaHidden="true"></i>
      </Row>

      <Row>
        <SplitButton bsStyle='default' title='FKA' id='split-button-basic-1'>
          <MenuItem eventKey="1">OKA</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">OR</MenuItem>
        </SplitButton> 
        &nbsp;
        <input type="text" className="form-control" />
        &nbsp; <i className="fa fa-minus-circle makeItRed" ariaHidden="true"></i>
      </Row> 
      
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
