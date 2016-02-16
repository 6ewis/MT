'use strict';

var React = require('react');
var Html5DragAndDrop = require('../_html5DragAndDrop');

var DateDeceased = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    var me = this;
    function renderDatesDeceased() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.dateDeceased !== null) {
               return ( <li draggable="true" 
                            onDragStart={me.drag} 
                            className="dragDateDeceased" 
                            id={"dragDateDeceased" + obj.CPREF} 
                            key={"dragDateDeceased" + index}
                            style={{fontSize: '12px'}}> 
                            {obj.dateDeceased + " (CP: " + obj.CPREF + ")"}
                        </li>);
          }
        }
      );
    }

    return (
        <div>
          <span style={me.props.sideBarHeaderStyle}> 
             Dates Deceased 
          </span>
          <br/>
          <ul>
            {renderDatesDeceased()}
          </ul>
        </div>
     );
    }
});

module.exports = DateDeceased;
