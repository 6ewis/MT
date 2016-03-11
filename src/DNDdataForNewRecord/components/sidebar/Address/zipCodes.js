import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let ZipCodes = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderZipCodes() {
      return me.props.selectedEntities.map((obj, index) => {
           if (obj.province !== null) {
             return (<li draggable="true" 
                         onDragStart={me.drag} 
                         className="dragPostalCodeOrZipCode" 
                         id={"dragZipCode" + obj.CPREF} 
                         key={"draZipCode" + index}
                         style={{fontSize: '12px'}}> 
                         {obj.zipCode + " (CP: " + obj.CPREF + ")"}
                     </li>);
            }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
             ZipCode
            </span>
            <br/>
            <ul>
              {renderZipCodes()}
            </ul>
          </div>
    );
 }
});

export default ZipCodes;
