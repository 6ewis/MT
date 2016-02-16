'use strict'; 

import React from 'react';
import _ from 'lodash';
import inflection from 'inflection';

var RoundedSquare = React.createClass({
drop: function(ev) { //This piece of code is screaming "Refactor me"
  ev.preventDefault();
  //note that html5 drag and drop sucks. We might want to use something more robust such as reactDND 
  //in the future
  //hack to get the equivalent ID a roundSquare map one to one with the corresponding type 
  //i,e Entity types sidebar items => Entity Type roundSquare
  var data = ev.dataTransfer.getData('drag' + this.props.title.split(' ').join(''));
  var uniqueFieldCpref = data.match(/(\d+)/g)[0];
  console.log("here is the data we see when we drag and drop" + data);
  var content;
  if (_.includes(data, 'Position')) {
    console.log("here is the data " + data);
    var tabTitle = document.getElementById(data).parentNode.previousSibling.previousSibling.textContent;
    content = tabTitle;
    var positionInfo = document.getElementById(data).getAttribute('data-info');
    this.props.spawnNewTab(tabTitle, JSON.parse(positionInfo));
  } else if (_.includes(data, 'EntityType')) {
    console.log("here is the data " + data);
    content = document.getElementById(data).children[2].textContent;
  } else {
     //update the content with the value dragged and rerender the component
     //var content = document.getElementById(data).children[1].textContent;
    content = document.getElementById(data).textContent;
  }
  this.setState({content: content});
  //variables needed to trigger the function elementDropped() higher up in the hierarchy
  var classAttribute = data.match(/(\D+)/g)[0].replace(/drag/, '');
  classAttribute = inflection.camelize(classAttribute, true);
  //update the cpref state and the attribute state
  this.setState({attribute: classAttribute, cpref: uniqueFieldCpref});
  //trigger elementDropped()
  this.props.elementDropped(classAttribute, uniqueFieldCpref, content);
},
allowDrop: function(ev) {
  ev.preventDefault();
},
getInitialState: function() {
  return {content: '',
          cpref: null,
          attribute: null};
},
reset: function() {
 this.setState({content: null});
 this.props.reset(this.state.attribute, this.state.cpref);
},
render: function() {
    var styleRoundSquare = {
       borderRadius: '25px',
       border: '2px dotted #8AC007',
       padding: '20px',
       width: '350px',
       height: '160px'
    };

    var title = {marginLeft: '20px', 
             fontSize: "25px",
             fontFamily: 'museo-slab, Georgia, "Times New Roman", Times, serif', 
             fontWeight: 'bold'};

    var me = this;

    function renderDraggedContent() {
      return (
       <div>
         <i className='fi-x'onClick={me.reset}></i>
         <ul><li>{me.state.content}</li></ul>
       </div>
      );
    }

    function renderOriginalContent() {
     return (
       <div style={styleRoundSquare}>
          <center><small>Drag and Drop here!</small></center>
       </div>
     );
    }

    function renderContent() {
     return me.state.content ? renderDraggedContent() : renderOriginalContent();
    }

    return (
    <div className="container" id="dropBox" onDrop={this.drop} onDragOver={this.allowDrop}>
      <p style={title}> {this.props.title} </p>
      {renderContent()}
    </div>
   );
  } 
});

module.exports = RoundedSquare;
