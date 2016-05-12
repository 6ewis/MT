import React, {Component} from 'react';
//Shared Components
import AddressContainer from './address_container';
import {Button, Accordion, Row} from 'react-bootstrap';
import R from 'ramda';
//import S from 'sanctuary';

export default class Address extends Component {
  constructor(props) {
     super(props);
     this.state = {newAddresses: []};
  }
      //I most likely don't need it anymore
          // //this is for addresses - will be extracted in its own component- WIP
          // const onlyTheRegisteredAddresses = R.filter( R.propEq('address_type', 'Registered'), matter_specific_addresses);
          // const returnEntitySpecificOption = (item) =>
          //   `${item.client_name} (M#${item.matter}) \n
          //    ${item.positions}`;
          // const options = R.map(returnEntitySpecificOption, onlyTheRegisteredAddresses);
 renderKnownAddresses() {
    const {mailingAddressFields, registeredAddressFields, dividendAddressFields} =
      this.props;
    return [Object.assign({defaultSelection: "Mailing", header: "Mailing", eventKey: '1'},
        mailingAddressFields),
       Object.assign({defaultSelection: "Registered", header: "Registered", eventKey: '2'},
        registeredAddressFields),
       Object.assign({defaultSelection: "Dividend", header: "Dividend", eventKey: '3'},
        dividendAddressFields)
       ].map((item, index) =>
      item === undefined ?
        null :
        <AddressContainer key={index}
          {...item} />
    );
}

  render() {
    return (
      <div>
        <br/>
        <Row>
          <hr/>
          <Button
            bsStyle="primary"
            onClick={() =>
              this.setState({newAddresses:
                R.append(<AddressContainer header={"More Address"}/>, this.state.newAddresses)
            })}
          >
              + Add Address
          </Button>
        </Row>

        <br/>
        <Row>
          <Accordion defaultActiveKey='2'>
            {this.renderKnownAddresses()}
            {this.state.newAddresses}
          </Accordion>
        </Row>
      </div>
    );
  }
}
