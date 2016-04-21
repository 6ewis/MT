import React, {Component} from 'react';
import {Row, Input} from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';

class _Autosuggest extends Component {
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
      billingClient.client_number.toLowerCase().slice(0, inputLength) === inputValue
    );
  }
  
  getSuggestionValue(suggestion) { 
    // when suggestion selected, this function tells
    // what should be the value of the input
    return suggestion.client_number; }
  
  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.client_number}</span>
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
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

