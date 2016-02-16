import React from 'react';
import Router, {Link} from 'react-router';


let BackButton = React.createClass({
  render: function() {
    const {url} = this.props;
    return (<div>
             <Link to={url}>
               <button><i className="fa fa-arrow-left"></i>
                &nbsp;
                Add More Entities
               </button>
             </Link>
            </div>);
  }
});

export default BackButton;
