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
                   eventKey: 3
                  }; //increment eventKey everytime a new address is appended to the
                     //newAddresses ;; also useful to have unique keys
     this.updateAddressData = this.updateAddressData.bind(this);
  }

  updateAddressData(obj) {
    this.props.updateFormData({addressesContainer: obj});
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
     const {countries, matterPositions, updateFormData} = this.props;
     return <AdditionalAddressContainer
        key={incrementedEventKey}
        countries={countries}
        eventKey={incrementedEventKey} //needed for the react-bootstrap accordion component
        matterPositions={matterPositions}
        updateAddressData={this.updateAddressData}
        header={`#${incrementedEventKey} Mailing`}/>;
  }
  onClickHandler() {
    const self = this;
    self.setState(state => {
      let incrementedEventKey = R.add(1, state.eventKey);
      return {
        eventKey: incrementedEventKey,
        newAddresses:
          R.append(self.renderAdditionalAddressContainer(incrementedEventKey),
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
            {this.state.newAddresses}
          </Accordion>
        </Row>
      </div>
    );
  }
}
