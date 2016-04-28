import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import _Label from '../shared/_label';

//return everything when you dont specify client number
//add search by name and show address
//name (client number)
//address

export default class _Autosuggest extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: this.getSuggestions('')
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.data.filter(billingClient =>
      (billingClient.client_number.toLowerCase().slice(0, inputLength) === inputValue) ||
      (billingClient.client_name.toLowerCase().slice(0, inputLength) === inputValue)
    );
  }

  getSuggestionValue(suggestion) {
    // when suggestion selected, this function tells
    // what should be the value of the input
    return suggestion.client_number; }

  renderSuggestion(
    {client_name, client_number, address1, address2,
     address3, address4, address5, address6}) {

    return (
      <span>
        {client_name}
        <strong>
          ({client_number})
        </strong>}
        <br/>
        {`${address1} ${address2} ${address3}
          ${address4} ${address5} ${address6}`}
      </span>
    );
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a Billing Client Number',
      value,
      className: 'form-control',
      onChange: this.onChange
    };

    return (
      <Row>
       <_Label name={this.props.label}/>
       <Autosuggest
         className="formControl"
         suggestions={suggestions}
         onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
         getSuggestionValue={this.getSuggestionValue}
         renderSuggestion={this.renderSuggestion}
         inputProps={inputProps} />
       <br/>
      </Row>
    );
  }
}
