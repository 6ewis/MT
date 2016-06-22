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
     this.updateAdditionalAddressData = this.updateAdditionalAddressData.bind(this);
     this.spawnNewFieldHandler = this.spawnNewFieldHandler.bind(this);
     //We populate the AdditionalAddressContainer with the props passed
     const initialNewFields = this.initialNewFields();
     const initialNewFieldsLength = initialNewFields.length;
     this.state = {
       header: props.header, //the header is dynamically changed when the user choose a position
       newFields: initialNewFields,
       uniqueKey: initialNewFieldsLength
     };
  }

  initialNewFields() {
    const {matterSpecificAddress} = this.props;
    if (R.isNil(matterSpecificAddress)) { return []; }
    const fields = ["Preferred Name", "Phone", "Email", "Address"];
    const matterSpecificAddressField = field => {
      switch(field) {
        case fields[0]:
          return matterSpecificAddress.preferred_name;
        case fields[1]:
          return matterSpecificAddress.phone;
        case fields[2]:
          return matterSpecificAddress.email;
        case fields[3]:
          const {
            city,
            province,
            postal_code,
            addess_1: line_1,
            address_2: line_2,
            address_3: line_3,
            address_4: line_4} = matterSpecificAddress;
          return {city, province, postal_code, line_1, line_2, line_3, line_4};
      }
    };

    const serializedMatterSpecificAddress = (field, index) => {
      //we re-use the renderInput function by passing twos extra arguments
      //matterSpecificAddress(field) and index
      const renderedInput = (field === "Address") ?
        this.renderAddressInfo(field, matterSpecificAddressField(field), index) :
        this.renderInput(field, matterSpecificAddressField(field), index);
      return {value: renderedInput, selectedItem: field};
    };

    const mapIndexed = R.addIndex(R.map);
    const fieldsToRender = mapIndexed(serializedMatterSpecificAddress, fields);
    return fieldsToRender;
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
    const {updateAddressData} = this.props;
    updateAddressData({[`${this.state.header}Address`]: updatedObject});
  }

  renderInput(selectedItem, matterSpecificAddressProp, indexUniqueKey) {
    return (
      <div key={R.isNil(indexUniqueKey) ? this.state.uniqueKey : indexUniqueKey}>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText
              label={selectedItem}
              value={matterSpecificAddressProp}
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
      </div>
     );
   }

  renderAddressInfo(selectedItem, matterSpecificAddressProp, indexUniqueKey) {
    return (
       <AddressInfo
         countries= {this.props.countries}
         label={selectedItem}
         header={this.props.header}
         removeField={this.removeField.bind(this)}
         updateAddressData={this.updateAdditionalAddressData}
         matterSpecificAddressProp={matterSpecificAddressProp}
         key={R.isNil(indexUniqueKey) ? this.state.uniqueKey : indexUniqueKey}
       />
     );
   }

  spawnNewFieldHandler(selectedItem, e) {
     switch (selectedItem) {
       case "Address":
         this.renderField(this.renderAddressInfo(selectedItem), selectedItem);
         break;
       case "Preferred Name":
         this.renderField(this.renderInput(selectedItem), selectedItem);
         break;
       case "Phone":
         this.renderField(this.renderInput(selectedItem), selectedItem);
         break;
       case "Email":
         this.renderField(this.renderInput(selectedItem), selectedItem);
         break;
     }
  }

  setHeader(clientName) {
    this.setState({header: clientName});
  }

  render() {
    const {matterSpecificAddress, header, defaultSelection, matterPositions} = this.props;
    const {client_name, positions, matter} = matterSpecificAddress;

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
                 defaultSelection= "Mailing"
                 updateFormData={this.updateAdditionalAddressData.bind(this)}
                 disabled= {true}
                 />

                <_ReactSelect
                   label="Entity Specific"
                   data={matterPositions}
                   defaultValue=
                     {{client_name: client_name,
                       positions: positions,
                       matter: matter
                     }}
                   updateAddressData={this.updateAdditionalAddressData.bind(this)}
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
