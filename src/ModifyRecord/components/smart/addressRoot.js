import React, {Component} from 'react';
//Shared Components
import KnownAddressesContainer from '../dumb/knownaddressesContainer';
import AdditionalAddressContainer from './additionalAddressContainer';
import {Button, Accordion, Row} from 'react-bootstrap';
import R from 'ramda';

export default class Address extends Component {
  constructor(props) {
     super(props);
     this.state = {newAddresses: [],
                   lastEventKey: 3
                   //3 because there are three 'known Addresses rendering
                   //beforehand with event key 1,2,3
                  };
     this.updateAddressData = this.updateAddressData.bind(this);
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
         header: "#1 Registered",
         eventKey: '1',
         updateAddressData: this.updateAddressData,
         countries: countries
        },
        registeredAddressFields),
      Object.assign(
        {defaultSelection: "Mailing",
         header: "#2 Mailing",
         eventKey: '2',
         updateAddressData: this.updateAddressData,
         countries: countries
       },
        mailingAddressFields),
      Object.assign(
        {defaultSelection: "Dividend",
         header: "#3 Dividend",
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

  renderAdditionalAddressContainer(incrementedEventKey) {
    //we render additional Addresses whenever we click on +add addresses
     const {countries, matterPositions, updateFormData} = this.props;
     return <AdditionalAddressContainer
        key={incrementedEventKey}
        countries={countries}
        eventKey={incrementedEventKey}
        matterPositions={matterPositions}
        updateAddressData={this.updateAddressData}
        removeComponentInstance={this.removeComponentInstance.bind(this)}
        header={`#${incrementedEventKey} Mailing`}/>;
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
