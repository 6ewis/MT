import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Provinces = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderProvinces() {
      return me.props.selectedEntities.map((obj, index) => {
           if (obj.province !== null) {
             return (<li draggable="true" 
                         onDragStart={me.drag}
                         className="dragProvinceOrState" 
                         id={"dragProvince" + obj.CPREF} 
                         key={"dragProvince" + index}
                         style={{fontSize: '12px'}}> 
                         {obj.province + " (CP: " + obj.CPREF + ")"}
                    </li>);
            }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
              Provinces
            </span>
            <br/>
            <ul>
              {renderProvinces()}
            </ul>
          </div>
    );
 }
});

export default Provinces;
