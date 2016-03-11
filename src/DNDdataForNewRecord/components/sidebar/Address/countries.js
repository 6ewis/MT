import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Countries = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    function renderCountries() {
      return me.props.selectedEntities.map((obj, index) => {
           if (obj.country !== null) {
             return (<li draggable="true" 
                         onDragStart={me.drag} 
                         className="dragCountry" 
                         id={"dragCountry" + obj.CPREF} 
                         key={"dragCountry" + index}
                         style={{fontSize: '12px'}}> 
                         {obj.country + " (CP: " + obj.CPREF + ")"}
                    </li>);
            }
        });
    }

    return (
          <div>
            <span style={me.props.sideBarHeaderStyle}>
              Countries
            </span>
            <br/>
            <ul>
              {renderCountries()}
            </ul>
          </div>
    );
 }
});

export default Countries;
