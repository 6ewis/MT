import React from 'react';
import Router, {Link} from 'react-router';


let NextButton = React.createClass({
  render: function() {
    const {url, content, data} = this.props;
    return (<div>
             <Link to={url} state={data}>
               <button>
               { content }
                 <i className="fa fa-arrow-right"></i>
               </button>
             </Link>
            </div>);
  }
});

export default NextButton;
