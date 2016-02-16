import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Fax = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderFax() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.fax !== null) {
            return (<li draggable="true"
                        onDragStart={me.drag} 
                        className="dragFax" 
                        id={"dragFax" + obj.CPREF} 
                        key={"dragFax" + index}
                        style={{fontSize: '12px'}}>
                        {obj.fax + " (CP: " + obj.CPREF + ")"}
                    </li>);
          }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
              Fax
            </span>
            <br/>
            <ul>
              {renderFax()}
            </ul>
          </div>
    );
 }
});

export default Fax;
