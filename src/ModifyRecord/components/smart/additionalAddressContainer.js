import React, {Component} from 'react';
import {Col, Panel, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from '../dumb/shared/_splitButtonWithLabel';
import AddNewField from './addNewField';
import AddressInfo from '../dumb/addressInfo';
import _InputText from './shared/_inputText';
import R from 'ramda';

export default class AddressContainer extends Component {
  constructor() {
     super();
     this.state = {newFields: [], uniqueKey: 0};
  }

  renderField(type) {
    this.setState((previousState, currentProps) => {
      let incrementedKey = R.add(1, previousState.uniqueKey);
      let updatedNewFields =
        R.append(type, previousState.newFields);
    return {newFields: updatedNewFields, uniqueKey: incrementedKey};
    });
  }

  renderInput(selectedItem) {
    return this.renderField(
      <Row>
        <_InputText label={selectedItem}
          key={this.state.uniqueKey}/>
        <br/>
      </Row>
    );
   }

  renderAddressInfo(selectedItem) {
     return this.renderField(
       <AddressInfo label={selectedItem}
         key={this.state.uniqueKey} />);
   }

  spawnNewFieldHandler(selectedItem, e) {
     switch (selectedItem) {
       case "Address":
         this.renderAddressInfo(selectedItem);
         break;
       case "Preferred Name":
         this.renderInput(selectedItem);
         break;
       case "Phone":
         this.renderInput(selectedItem);
         break;
       case "Email":
         this.renderInput(selectedItem);
         break;
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
               options= {["Mailing", "Dividend"]}
               disabled= {true}
               />
              <_SplitButtonWithLabel
               label="Entity Specific"
               options={this.props.matterPositions}
               defaultSelection="~ None Selected ~"
               />

               {this.state.newFields}

              <br/>
              <AddNewField spawnNewField={this.spawnNewFieldHandler.bind(this)} />
        </Well>
      </Panel>
    );
}
}
