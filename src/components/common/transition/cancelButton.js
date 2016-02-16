import React from 'react';

let CancelButton = React.createClass({
  render: function() {
    return (<div>
             <button>
              <i className="fa fa-trash"></i>
              &nbsp;
              Cancel Merge
             </button>
            </div>);
  }
});

export default CancelButton;
