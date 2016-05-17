import React, {Component} from 'react';
import {Col, Panel, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import AddNewField from './addNewField';
import AddressList from './addressList';
import R from 'ramda';

export default class AddressContainer extends Component {
  constructor() {
     super();
     this.state = {newFields: []};
  }

  spawnNewFieldHandler(selectedItem, e) {
    console.log("I'm in the spawnNreFieldHandler method");
    //we don't do anything with the return value
     switch (selectedItem) {
       case "Address":
          this.setState((previousState, currentProps) => {
           console.log("im in the address");
           let OupdatedNewFields = R.append(<AddressList />, previousState.newFields);
           let updatedNewFields = [<AddressList />];
           console.log(OupdatedNewFields, updatedNewFields);
           console.log("updated new fields is: ", updatedNewFields);
           return {newFields: updatedNewFields};
       });
       debugger
       break;
       case "Preferred Name":
         return console.log('I have not set it up yet');
       case "Phone":
         return console.log('the phone number input goes here');
       case "Email":
         return console.log("the email address goes here");
     }
  }

  render() {
    return (
      <Panel {...this.props} header={this.props.header || `new Header`}>
        <Well>
              <Row>
                <Col mdOffset={11}>
                  <i className="fa fa-trash-o fa-3x makeItRed"
                     aria-hidden="true"
                     style={{cursor: 'pointer'}}
                     >
                  </i>
                </Col>
              </Row>

              <_SplitButtonWithLabel
               label="Address Type"
               defaultSelection= {this.props.defaultSelection}
               disabled= {true}
               />
              <_SplitButtonWithLabel
               label="Entity Specific"
               defaultSelection="~ None Selected ~"
               />

               {this.state.newFields}

              <br/>
              <AddNewField spawnNewField={this.spawnNewFieldHandler} />
        </Well>
      </Panel>
    );
}
}
