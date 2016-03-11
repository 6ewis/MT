import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Residences = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderResidences() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.residence !== null) {
            return (<li draggable="true" 
                        onDragStart={me.drag} 
                        className="dragResidence" 
                        id={"dragResidence" + obj.CPREF} 
                        key={"dragResidence" + index}
                        style={{fontSize: '12px'}}> 
                        {obj.residence + " (CP: " + obj.CPREF + ")"}
                    </li>);
          }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
              Residences
            </span>
            <br/>
            <ul>
              {renderResidences()}
            </ul>
          </div>
    );
 }
});

export default Residences;
