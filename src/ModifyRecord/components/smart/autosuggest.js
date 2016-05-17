import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import _Label from '../dumb/shared/_label';
import R from 'ramda';

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

    const checkIfInputEqBillingInfo = R.curry((value, acc, next) =>
      acc || next.toLowerCase().slice(0, value.length) === value);

    return inputLength === 0 ?
      [] :
      R.filter(billing => R.reduce(checkIfInputEqBillingInfo(inputValue),
        false, [billing.client_number, billing.client_name]), this.props.data);
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
        </strong>
        <br/>
        <small>
        {`${address1} ${address2} ${address3}
          ${address4} ${address5} ${address6}`}
        </small>
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
