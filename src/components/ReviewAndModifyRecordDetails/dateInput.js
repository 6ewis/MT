import React, {Component} from 'react';
import Calendar from 'react-input-calendar';

class DateInput extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderDate() {
    return (
       <div className="row">
        <div className="large-12 columns">
          <label htmlFor={this.props.title}> <strong> {this.props.title} </strong></label>
          <Calendar format="DD/MM/YYYY" date={this.props.value} />
        </div>
       </div>
    );
  }

  render() {
    return (
     this.renderDate()
    );
  }
}

export default DateInput;
