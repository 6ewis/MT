import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Nationalities = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderNationalities() {
      return me.props.selectedEntities.map((obj, index) => {
          if (obj.nationality !== null) {
            return (<li draggable="true" 
                        onDragStart={me.drag} 
                        className="dragNationality" 
                        id={"dragNationality" + obj.CPREF}
                        key={"dragNationality" + index} 
                        style={{fontSize: '12px'}}>
                        {obj.nationality + " (CP: " + obj.CPREF + ")"}
                    </li>);
          }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
               Nationalities
            </span>
            <br/>
            <ul>
              {renderNationalities()}
            </ul>
          </div>
    );
 }
});

export default Nationalities;
