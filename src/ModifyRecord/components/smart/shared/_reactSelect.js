import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import _Label from '../../dumb/shared/_label';
//third party lib
import R from 'ramda';
import Select from 'react-select';

export default class ReactSelect extends Component {
  //Note: Warning: FormControl is changing a controlled input of type text to be uncontrolled
  //it might be related to React 0.15 update
  //the third party lib did not take it into account
  //investigate ?
  constructor(props) {
    super(props);
    this.state = {
       currentValue: ""
    };
  }

    //the selected inputs expect an object with a value and a label
  serializedMatterPositions(obj) {
    const clientName = R.trim(obj.client_name);
    const matter = R.trim(obj.matter);
    const positions = R.trim(obj.positions);

    const concatenatedProperties =
      `${clientName} (M#${matter}) -${positions}`;
    return {
       //following props are needed to save it to the global store
       //which will eventually be saved in the db layer
       client_name: clientName,
       matter: matter,
       positions: positions,
       //following props are needed for ReactSelect to work properly
       value: concatenatedProperties,
       label: concatenatedProperties};
   }

  matterPositions(data) {
    return R.map(this.serializedMatterPositions, data);
  }

  handleChange(obj) {
    const {setHeader, label, updateAddressData} = this.props;
    if (!R.isNil(obj)) {
      this.setState({currentValue: obj.value});
      //updateAddressData call updateFormData
      //the structure expected by updateFormData is quite stirct
      //{AddressContainer: {property1: {nestedProperty: value}}}
      //'AddressContainer' is added on the parent element
      updateAddressData({
        //{property1: {nestedProperty: value}}}
        [`${label}`]: {clientName: obj.client_name}
      });
      setHeader(`Mailing / ${obj.client_name} (M#${obj.matter})`);
    } else {
      this.setState({currentValue: ""});
    }
  }

  componentDidMount() {
     const {updateAddressData, defaultValue, setHeader, label} = this.props;
      if (defaultValue) {
        const {value, client_name, matter} = this.serializedMatterPositions(defaultValue);
        const p = new Promise((resolve, reject) => resolve(this.setState({currentValue: value})));
        p.then(() => setHeader(`Mailing / ${client_name} (M#${matter})`))
        //updateAddressData call updateFormData
        //the structure expected by updateFormData is quite stirct
        //{AddressContainer: {property1: {nestedProperty: value}}}
        //'AddressContainer' is added on the parent element
        .then(() => updateAddressData({
            [`${label}`]: {clientName: client_name}
        })).then(() => {
          //we programmatically trigger a change of event on the inputs field so that
          //the content can be stored so that the next page can use it
          //note that ideally the following code should not be there, however
          //this is a quick fix - we need to trigger it only after the header has been setState
          //since the fields are being stored based on the header name
           var event = new Event('input', { bubbles: true });
           [].map.call(document.querySelectorAll("input"),
             function(item, idx) {item.dispatchEvent(event); });
         }).catch(err => console.log("_reactSelect componentDidMount rejected:", err));
     }
}


  render() {
    return (
      <div>
        <Row>
          <_Label name={this.props.label} />
        </Row>
        <Row>
          <Select
            name="form-field-name"
            value= {this.state.currentValue}
            options= {this.matterPositions(this.props.data)}
            onChange= {this.handleChange.bind(this)}
          />
        </Row>
     </div>
    );
  }
}
