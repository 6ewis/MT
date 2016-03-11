import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Phones = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderPhones() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.phone !== null) {
            return (<li draggable="true" 
                        onDragStart={me.drag} 
                        className="dragPhone" 
                        id={"dragPhone" + obj.CPREF}
                        key={"dragPhone" + index} 
                        style={{fontSize: '12px'}}> 
                        {obj.phone + " (CP: " + obj.CPREF + ")"}
                     </li>);
          }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
              Phones
            </span>
            <br/>
            <ul>
              {renderPhones()}
            </ul>
          </div>
    );
 }
});

export default Phones;
