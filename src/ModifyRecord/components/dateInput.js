import React, {Component} from 'react';
import Calendar from 'react-input-calendar';

export default class DateInput extends Component {
  renderDate() {
    return (
       <div className="row">
         <label htmlFor={this.props.title}> <strong> {this.props.title} </strong></label>
         <Calendar format="DD/MM/YYYY" date={this.props.value} />
       </div>
    );
  }

  render() {
    return (
     this.renderDate()
    );
  }
}
