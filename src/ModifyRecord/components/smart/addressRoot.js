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
                   eventKey: 3}; //increment eventKey everytime a new address is appended to the
                                //newAddresses ;; also useful to have unique keys
  }

  renderKnownAddresses() {
    const {
      mailingAddressFields,
      registeredAddressFields,
      dividendAddressFields,
      updateFormData,
      matterPositions
    } = this.props;
    return [
      //core addresses
      //we show "Registered", "Mailing", and Dividend by default
      Object.assign(
        {defaultSelection: "Registered",
         header: "Registered",
         eventKey: '1',
         updateFormData: updateFormData
        },
        registeredAddressFields),
      Object.assign(
        {defaultSelection: "Mailing",
         header: "Mailing",
         eventKey: '2',
         updateFormData: updateFormData,
         matterPositions: matterPositions
       },
        mailingAddressFields),
      Object.assign(
        {defaultSelection: "Dividend",
         header: "Dividend",
         eventKey: '3',
         updateFormData: updateFormData
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
     const {matterPositions, updateFormData} = this.props;
     return <AdditionalAddressContainer
        key={incrementedEventKey}
        eventKey={incrementedEventKey} //needed for the react-bootstrap accordion component
        matterPositions={matterPositions}
        updateFormData={updateFormData}
        header={`Mailing ${incrementedEventKey}`}/>;
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
            { this.state.newAddresses }
          </Accordion>
        </Row>
      </div>
    );
  }
}
