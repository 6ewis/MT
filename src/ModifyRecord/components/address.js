import React, {Component} from 'react';
import R from 'ramda';

export default (address) => {
  const maybe = () => {};
 // const maybe = (method) => {
 //    //ramda util functions Lewis
 //    if (!R.isNil(deserialized_concatenated_registered_address)) {
 //    return !R.isNil(deserialized_concatenated_registered_address.registeredAddressFields) ?
 //      deserialized_concatenated_registered_address.registeredAddressFields[method] :
 //      null
 //  }
 // }
       //I most likely don't need it anymore
          // //this is for addresses - will be extracted in its own component- WIP
          // const onlyTheRegisteredAddresses = R.filter( R.propEq('address_type', 'Registered'), matter_specific_addresses);
          // const returnEntitySpecificOption = (item) =>
          //   `${item.client_name} (M#${item.matter}) \n
          //    ${item.positions}`;
          // const options = R.map(returnEntitySpecificOption, onlyTheRegisteredAddresses);

  return (
    <div>
      <br/>
      <Row>
        <hr/>
        <Button
          bsStyle="primary"
          >
            + Add Address
        </Button>
      </Row>

      <br/>
      <Row>
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
           defaultSelection="Registered"
           disabled= {true}
           />
          <_SplitButtonWithLabel
           label="Entity Specific"
           defaultSelection="~ None Selected ~"
           />

          <Row>
            <_Label name="Address"/>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_1')}/>
            </Col>
            <Col md={2} style={{paddingLeft: '0px'}}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_2')}
              />
            </Col>
          </Row>

          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_3')}
              />
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_4')}
              />
            </Col>
          </Row>

          <br/>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText label="City"
                 value={maybe('regaddr_locality')}
              />
            </Col>
          </Row>

          <br/>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText label="Province/State"
                 value={maybe('regaddr_postal_code')}
              />
            </Col>
          </Row>

          <br/>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText label="Country"
                 value={maybe('regaddr_country_name')}
              />
            </Col>
          </Row>

          <br/>
          <_SplitButtonWithLabel
             label="New Field"
             defaultSelection="None Selected"
           />

          <Row>
            <Button style={{paddingLeft: '0px'}}>
              Add New Field
            </Button>
          </Row>
        </Well>
      </Row>
    </div>
  );
};
