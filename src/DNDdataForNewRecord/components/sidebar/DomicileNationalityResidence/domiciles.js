import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Domiciles = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderDomiciles() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.domicile !== null) {
            return (<li draggable="true" 
                        onDragStart={me.drag}
                        className="dragDomicile" 
                        id={"dragDomicile" + obj.CPREF}
                        key={"dragDomicile" + index}
                        style={{fontSize: '12px'}}> 
                        {obj.domicile + " (CP: " + obj.CPREF + ")"}
                    </li>);

          }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
              Domiciles
            </span>
            <br/>
            <ul>
              {renderDomiciles()}
            </ul>
          </div>
    );
 }
});

export default Domiciles;
