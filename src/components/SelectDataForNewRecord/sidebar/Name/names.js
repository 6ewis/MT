'use strict';

var React = require('react');
var Html5DragAndDrop = require('../_html5DragAndDrop');

var Names = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    var me = this;
    function renderNames() {
       return me.props.selectedEntities.map((obj, index) => {
           if (obj.name !== null) {
             return (<li draggable="true" 
                         onDragStart={me.drag} 
                         className="dragName" 
                         id={"dragName" + obj.CPREF}
                         key={"dragName" + index} 
                         style={{fontSize: '12px'}}> 
                         {obj.name + " (CP: " + obj.CPREF + ")"}
                    </li> );
           }
         });
     }

     return (
         <div>
           <span style={me.props.sideBarHeaderStyle}> 
              Names
           </span>
           <br/>
           <ul>
             {renderNames()}
           </ul>
         </div>
      );
 }
});

module.exports = Names;
