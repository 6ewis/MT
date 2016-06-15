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

  removeField(selectedItem, event) {
    console.log('removeField', selectedItem);
    //const self = this;
    const removedAddress =
      R.filter(R.complement(R.propEq('selectedItem', selectedItem)),
       this.state.newFields);
    console.log('the removedAddress is', removedAddress);
    this.setState({newFields: removedAddress});
  }

  isSelectedItemEq(selectedItem) {
    return R.isEmpty(this.state.newFields) ?
      null :
      R.find(R.propEq('selectedItem', selectedItem), this.state.newFields);
  }

  renderField(renderedItem, selectedItem) {
    console.log("Im in the renderField", selectedItem);
    const incrementedKey = R.add(1, this.state.uniqueKey);
      if (R.isNil(this.isSelectedItemEq(selectedItem))) {  //only add it if it's not present
        let updatedNewFields =
          R.append({value: renderedItem, selectedItem: selectedItem},
            this.state.newFields);
            console.log('renderFiel still', updatedNewFields);
        this.setState({
          newFields: updatedNewFields,
          uniqueKey: incrementedKey});
      }
  }

  updateAdditionalAddressData(updatedObject) {
    const {updateAddressData, header} = this.props;
    updateAddressData({[`${header}Address`]: updatedObject});
  }

  renderInput(selectedItem) {
    console.log('im inthe renderInput', selectedItem);
    this.renderField(
      <div>
        <Row key={this.state.uniqueKey}>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText
              label={selectedItem}
              updateFormData={this.updateAdditionalAddressData}
            />
          </Col>
          <Col md={2}>
            <i onClick={this.removeField.bind(this, selectedItem)}
               style={{cursor: 'pointer'}}
               className="fa fa-trash-o"
               aria-hidden="true">
            </i>
          </Col>
        </Row>
        <br/>
      </div>, selectedItem
     );
   }

  renderAddressInfo(selectedItem) {
    console.log('im in the renderAddressInfo', selectedItem);
    this.renderField(
       <AddressInfo
         countries= {this.props.countries}
         label={selectedItem}
         header={this.props.header}
         removeField={this.removeField.bind(this)}
         updateAddressData={this.updateAdditionalAddressData}
         key={this.state.uniqueKey}
       />, selectedItem
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

                 {R.map(R.prop('value'), this.state.newFields)}

                <br/>
                <AddNewField spawnNewField={this.spawnNewFieldHandler} />
          </Well>
      </Panel>
    );
}
}
