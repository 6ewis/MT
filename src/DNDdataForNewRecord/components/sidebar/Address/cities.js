import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Cities = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderCities() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.city !== null) {
            return (<li draggable="true" 
                        onDragStart={me.drag} 
                        className="dragCity" 
                        id={"dragCity" + obj.CPREF}
                        key={"dragCity" + index} 
                        style={{fontSize: '12px'}}> 
                        {obj.city + " (CP: " + obj.CPREF + ")"}
                    </li>);
          }
        });
    }

    return (
          <div>
            <span style={this.props.sideBarHeaderStyle}>
              Cities
            </span>
            <br/>
            <ul>
              {renderCities()}
            </ul>
          </div>
    );
 }
});

export default Cities;
