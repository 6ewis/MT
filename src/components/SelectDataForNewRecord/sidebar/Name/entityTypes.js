'use strict';

import React from 'react';
import Html5DragAndDrop from '../_html5DragAndDrop';
import _ from 'lodash';

let EntityTypes = React.createClass({
    mixins: [Html5DragAndDrop],
    render: function() {
       let classEntityTypes = {
                 'Individual': 'fa fa-user fa-3x',
                 'Company': 'fa fa-building-o fa-3x'
       };

       let me = this;

       function getuniqueEntityTypes() {
         //maybe use Set
         return _.uniq(me.props.selectedEntities.map( function(item) {
           return item.entityType;
          }));
       }

       let outputEntityTypes = getuniqueEntityTypes().map(function(entityType, index) {
          if (entityType !== null) {
            return (<div draggable="true" onDragStart={me.drag} className="dragEntityType"
                    id={"dragEntityType" + index} key={"dragEntityType" + index}>
                     <i style={{marginLeft: '25px'}} className={classEntityTypes[entityType]}></i>
                     <br/>
                     <span style={{marginLeft: '10px', fontFamily: "'Comic Sans MS', 'Comic Sans', cursive"}}>
                      {entityType}
                     </span>
                    </div>);
          }
      });

      return (
       <div>
         <div style={me.props.sideBarHeaderStyle}>
           Entity Types
           {outputEntityTypes}
         </div>
         <br/>
       </div>
      );
  }
});

export default EntityTypes;
