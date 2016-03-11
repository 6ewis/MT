'use strict';

var React = require('react');
var Html5DragAndDrop = require('../_html5DragAndDrop');

var DateOfBirth = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    var me = this;
    function renderDatesOfBirth() {
      return me.props.selectedEntities.map((obj, index) => {
         if (obj.dateOfBirth !== null) {
           return ( <li draggable="true" 
                        onDragStart={me.drag} 
                        className="dragDateOfBirth" 
                        id={"dragDateOfBirth" + obj.CPREF} 
                        key={"dragDateOfBirth" + index} 
                        style={{fontSize: '12px'}}> 
                        {obj.dateOfBirth + " (CP: " + obj.CPREF + ")"}
                    </li>);
         }
       }
      );
     }

    return (
        <div>
          <span style={me.props.sideBarHeaderStyle}> 
             Dates Birth 
          </span>
          <br/>
          <ul>
            {renderDatesOfBirth()}
          </ul>
        </div>
     );
    }
});

module.exports = DateOfBirth;
