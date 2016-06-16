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
  constructor(props) {
     super(props);
     this.state = {
       header: props.header,
       newFields: [],
       uniqueKey: 0
     };

     this.updateAdditionalAddressData = this.updateAdditionalAddressData.bind(this);
     this.spawnNewFieldHandler = this.spawnNewFieldHandler.bind(this);
  }

  removeComponentInstance() {
    const {removeComponentInstance, eventKey} = this.props;
    removeComponentInstance(eventKey);
  }

  removeField(selectedItem, event) {
    const removedAddress =
      R.filter(R.complement(R.propEq('selectedItem', selectedItem)),
       this.state.newFields);
    this.setState({newFields: removedAddress});
  }

  isSelectedItemEq(selectedItem) {
    return R.isEmpty(this.state.newFields) ?
      null :
      R.find(R.propEq('selectedItem', selectedItem), this.state.newFields);
  }

  renderField(renderedItem, selectedItem) {
    const incrementedKey = R.add(1, this.state.uniqueKey);
      if (R.isNil(this.isSelectedItemEq(selectedItem))) {  //only add it if it's not present
        let updatedNewFields =
          R.append({value: renderedItem, selectedItem: selectedItem},
            this.state.newFields);
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
    this.renderField(
      <div>
        <Row key={this.state.uniqueKey}>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText
              label={selectedItem}
              updateFormData={this.updateAdditionalAddressData}
            />
          </Col>
          <Col md={2} style={{paddingLeft: '0px'}}>
            <i onClick={this.removeField.bind(this, selectedItem)}
               style={{cursor: 'pointer'}}
               className="fa fa-trash-o fa-2x makeItRed"
               aria-hidden="true">
            </i>
          </Col>
        </Row>
        <br/>
      </div>, selectedItem
     );
   }

  renderAddressInfo(selectedItem) {
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

  setHeader(clientName) {
    this.setState({header: clientName});
  }

  render() {
    const {header, defaultSelection, matterPositions} = this.props;
    return (
        <Panel {...this.props} header={this.state.header}>
          <Well>
                <Row>
                  <Col mdOffset={11}>
                    <i onClick={this.removeComponentInstance.bind(this)} className="fa fa-trash-o fa-3x makeItRed"
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
                   setHeader={this.setHeader.bind(this)}
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
