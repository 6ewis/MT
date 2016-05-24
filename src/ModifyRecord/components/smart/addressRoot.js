import React, {Component} from 'react';
//Shared Components
import AddressContainer from '../dumb/addressContainer';
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
      updateFormData
    } = this.props;
    return [
      Object.assign(
        {defaultSelection: "Registered",
         header: "Registered",
         eventKey: '1',
         updateFormData: updateFormData
         matterPositions: matterPositions,
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
         updateFormData: updateFormData,
         matterPositions: matterPositions
        },
        dividendAddressFields)
       ].map((item, index) =>
      item === undefined ?
        null :
        <AddressContainer key={index}
          {...item} />
    );
  }

  onClickHandler() {
    this.setState(state => {
      let incrementedEventKey = R.add(1, state.eventKey);
      return {
        eventKey: incrementedEventKey,
        newAddresses:
          R.append(
             <AdditionalAddressContainer
                updateFormData= {this.props.updateFormData}
                matterPositions=
                  {this.props.matterPositions}
                key={incrementedEventKey}
                eventKey={incrementedEventKey}
                header={`Mailing ${incrementedEventKey}`}/>,
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
