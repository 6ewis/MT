import React from 'react';

let Dropdown = React.createClass({
  render: function() {
    let {label, type, value} = this.props;

    function renderOptions() {
     return ["individual", "company", "trust", "partnership"].map((item) =>
       <option value={item}> {item} </option>
     );
    }

    return (
     <div className="row">
      <div className="large-6 columns">
        <label> <strong> {label} </strong>
          <select value={value}>
          { renderOptions() }
          </select>
      </label>
      </div>
     </div>
    );
  }
});

export default Dropdown;
