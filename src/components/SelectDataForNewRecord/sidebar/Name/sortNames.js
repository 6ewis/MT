'use strict';

var React = require('react');
var Html5DragAndDrop = require('../_html5DragAndDrop');

var SortNames = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
   var me = this;
   function renderSortNames() {
     return me.props.selectedEntities.map((obj, index) => {
            if (obj.sortName != null) {
              return (<li draggable="true" 
                          onDragStart={me.drag} 
                          className="dragSortName" 
                          id={"dragSortName" + obj.CPREF} 
                          key={"dragSortName" + index}
                          style={{fontSize: '12px'}}> 
                          {obj.sortName + " (CP: " + obj.CPREF + ")"}
                      </li>);
             }
          }
        );
     }

   return (
      <div>
        <span style={me.props.sideBarHeaderStyle}>
           Sort Names
        </span>
        <br/>
        <ul>
          {renderSortNames()}
        </ul>
      </div>
   );
  }
});

module.exports = SortNames;
