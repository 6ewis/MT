import React, {Component} from 'react';
//Shared Components
import KnownAddressesContainer from '../dumb/knownaddressesContainer';
import AdditionalAddressContainer from './additionalAddressContainer';
import {Button, Accordion, Row} from 'react-bootstrap';
import R from 'ramda';

export default class Address extends Component {
  constructor(props) {
     super(props);
     //We populate the AddressRoot with the existing entity specific address passed down
     const existingEntitySpecificAddresses = this.existingEntitySpecificAddresses();
    //we use 3 + the length of the existing entity specific addresses
    //because there are x unknow existing entity specific Addresses
    //and three maximum possible known core addresses rendering.
    //It's needed if new items are added later
    //their uniqueKey will be incremented by 1: lastEventkey + 1
     const existingEntitySpecificAddressesLength = existingEntitySpecificAddresses.length + 3;
     this.state = {newAddresses: existingEntitySpecificAddresses,
                   lastEventKey: existingEntitySpecificAddressesLength};
     this.updateAddressData = this.updateAddressData.bind(this);
  }

  existingEntitySpecificAddresses() {
    //if some of the entities have matter specific addresses ,
    //we should autopopulate the matter specific address field.
    const serializedMatterSpecificAddress = (matterSpecificAddress, index) => {
      return {uniqueKey: index,
       value: this.renderAdditionalAddressContainer(index, matterSpecificAddress)};
    };
    const mapIndexed = R.addIndex(R.map);
    return mapIndexed(serializedMatterSpecificAddress, this.props.matterSpecificAddresses);
 }

  updateAddressData(obj) {
    this.props.updateFormData({addressesContainer: obj});
  }

  removeComponentInstance(eventKey) {
    const removedComponentInstance =
      R.filter(R.complement(R.propEq('uniqueKey', eventKey)),
       this.state.newAddresses);
    this.setState({newAddresses: removedComponentInstance});
  }

  renderKnownAddresses() {
    const {
      mailingAddressFields,
      registeredAddressFields,
      dividendAddressFields,
      updateFormData,
      matterPositions,
      countries
    } = this.props;
    return [
      //core addresses
      //we show "Registered", "Mailing", and Dividend by default
      Object.assign(
        {defaultSelection: "Registered",
         header: "Registered",
         eventKey: '1',
         updateAddressData: this.updateAddressData,
         countries: countries
        },
        registeredAddressFields),
      Object.assign(
        {defaultSelection: "Mailing",
         header: "Mailing",
         eventKey: '2',
         updateAddressData: this.updateAddressData,
         countries: countries
       },
        mailingAddressFields),
      Object.assign(
        {defaultSelection: "Dividend",
         header: "Dividend",
         eventKey: '3',
         countries: countries,
         updateAddressData: this.updateAddressData
        },
        dividendAddressFields)
       ].map((item, index) =>
      item === undefined ?
        null :
        <KnownAddressesContainer key={index}
          {...item} />
    );
  }

  renderAdditionalAddressContainer(incrementedEventKey, matterSpecificAddress) {
  //we render additional Addresses whenever we click on +add addresses
   const {countries, matterPositions, updateFormData} = this.props;
   return <AdditionalAddressContainer
      key={incrementedEventKey}
      countries={countries}
      eventKey={incrementedEventKey}
      matterPositions={matterPositions}
      matterSpecificAddress={matterSpecificAddress}
      updateAddressData={this.updateAddressData}
      removeComponentInstance={this.removeComponentInstance.bind(this)}
      header="New Mailing"/>;
  }

  renderAdditionalAddresses() {
    return R.map(R.prop('value'), this.state.newAddresses);
  }

  onClickHandler() {
  //Note that an eventKey is equivalent to uniqueKey, the name is just to differentiate
  //the purpose. uniqueKey is used to remove item easily and eventkey
  //is needed for the react-bootstrap accordion component
  //We increment eventKey everytime a new address is appended to newAddresses
  //to keep it unique for every component on the appended list
    const self = this;
    self.setState(state => {
      let incrementedEventKey = R.add(1, state.lastEventKey);
      return {
        lastEventKey: incrementedEventKey,
        newAddresses:
          R.append({uniqueKey: incrementedEventKey,
                    value: self.renderAdditionalAddressContainer(incrementedEventKey)},
                   state.newAddresses)
      };
    });
  }

  render() {
    return (
      <div>
        <br/>
        <Row>
          <hr/>
          <Button
            bsStyle="primary"
            onClick={this.onClickHandler.bind(this)}
          >
              + Add Address
          </Button>
        </Row>

        <br/>
        <Row>
          <Accordion defaultActiveKey='1'>
            {this.renderKnownAddresses()}
            {this.renderAdditionalAddresses()}
          </Accordion>
        </Row>
      </div>
    );
  }
}
