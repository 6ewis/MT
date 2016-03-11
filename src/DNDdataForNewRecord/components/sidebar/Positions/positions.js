import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop.js';

let Position = React.createClass({
  mixins: [Html5DragAndDrop],
  render: function() {
    let me = this;
    let {description} = this.props;
    function renderPosition() {
      return me.props.selectedEntities.map((item, index) => {
          return item.positions.map((obj) => {
            if ( obj.posn_desc === description) {
              return (<div className="panel callout radius">
                  <div draggable="true" 
                   onDragStart={me.drag} 
                   className= "dragPosition"
                   id={"dragPosition" + item.CPREF} 
                   data-info={JSON.stringify(obj)}
                   key={"dragPosition" + index}
                   style={{fontSize: '12px'}}
                  >
                    {item.name + " (CP: " + item.CPREF + ")"}
                    <br/>
                    {obj.client_name}
                    <br/>
                    {"C#" + obj.client_number + '|' + "M#" + obj.matter}
                 </div>
              </div>);
            } else {
             return null;
            }
          }
         );
        });
    }

    return (
          <div>
            <span style={this.props.sideBarHeaderStyle}>
             {description}
            </span>
            <br/>
              {renderPosition()}
          </div>
    );
 }
});

export default Position;
