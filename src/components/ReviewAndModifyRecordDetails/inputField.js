import React from 'react';

let Dropdown = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value });
    this.props.onChange(event.target.value);
  },
  render: function() {
    let me = this;
    let {label, type, value} = me.props;

    return (
     <div className="row">
      <div className="large-6 columns">
        <label htmlFor={label}> <strong>{label} </strong></label>
        <input onChange={me.handleChange} 
               type={type} 
               name={label} 
               value={me.state.value}
               >
        </input>
      </div>
     </div>
    );
 }
});

export default Dropdown;
