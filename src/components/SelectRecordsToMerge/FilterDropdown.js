import React from 'react';

let FilterDropdown = React.createClass({
  formatContent: function( content, index, array) {
    return (<li key={index}><a href="#">{content}</a></li>);
  },
  render: function() {
    let {content, title} = this.props;
    
    return (
    <div style={{display: "inline", 'marginRight': "10px"}}>
      <a href="#" 
         className="button tiny" 
         data-dropdown={"hover" + title} 
         data-options="is_hover:true; hover_timeout:5000">
         {this.props.title} 
         <i className="fi-arrow-down medium"></i>
      </a>

      <ul id={"hover" + title} 
          className="f-dropdown" 
          data-dropdown-content>
          { content.map(this.formatContent) }
      </ul>
    </div>
      );
  }
});


module.exports = FilterDropdown;
