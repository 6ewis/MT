import React, {Component} from 'react';
import {Col, Panel, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from '../dumb/shared/_splitButtonWithLabel';
import AddNewField from './addNewField';
import AddressInfo from '../dumb/addressInfo';
import _InputText from './shared/_inputText';
import _ReactSelect from '../smart/shared/_reactSelect';
import R from 'ramda';

export default class AdditionalAddressContainer extends Component {
  constructor() {
     super();
     this.state = {
       newFields: [],
       uniqueKey: 0
     };

     this.updateAdditionalAddressData = this.updateAdditionalAddressData.bind(this);
     this.spawnNewFieldHandler = this.spawnNewFieldHandler.bind(this);
  }

  renderField(selectedItem) {
    const incrementedKey = R.add(1, this.state.uniqueKey);
    let updatedNewFields =
      R.append(selectedItem, this.state.newFields);
    this.setState({
      newFields: updatedNewFields,
      uniqueKey: incrementedKey});
  }

  updateAdditionalAddressData(updatedObject) {
    const {updateAddressData, header} = this.props;
    updateAddressData({[`${header}Address`]: updatedObject});
  }

  renderInput(selectedItem) {
    this.renderField(
      <Row key={this.state.uniqueKey}>
        <_InputText
          label={selectedItem}
          updateFormData={this.updateAdditionalAddressData}
        />
        <br/>
      </Row>
     );
   }

  renderAddressInfo(selectedItem) {
    this.renderField(
       <AddressInfo
         label={selectedItem}
         header={this.props.header}
         updateAddressData={this.updateAdditionalAddressData}
         key={this.state.uniqueKey}
       />
     );
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
    const {header, defaultSelection, matterPositions} = this.props;
    return (
        <Panel {...this.props} header={header || `new Header`}>
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
                 defaultSelection= {defaultSelection}
                 updateFormData={this.updateAdditionalAddressData}
                 options= {["Mailing", "Dividend"]}
                 disabled= {true}
                 />

                <_ReactSelect
                   label="Entity Specific"
                   data={matterPositions}
                   updateAddressData={this.updateAdditionalAddressData}
                 />

                 <br/>

                 {this.state.newFields}

                <br/>
                <AddNewField spawnNewField={this.spawnNewFieldHandler} />
          </Well>
      </Panel>
    );
}
}
