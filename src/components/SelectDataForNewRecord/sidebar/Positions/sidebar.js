import React from 'react';
import Position from './positions'; 
import _SidebarPartial from '../_sidebarPatial';
import _ from 'lodash';

var Sidebar = React.createClass({
  render: function() {
    let me = this;
    console.log("I'm in the SidebarPositions and i expect the selectedEntities to be: ", me.props.selectedEntities);
    function uniquePositionsDesc() {
      let positions = me.props.selectedEntities.map((obj) => obj.positions );
      // [[{name: "Test"},{name: "test2"}],[{name: "fr"}], [{name: "A"}, {name: 'b'}, {name: 'c'}]
      return new Set(_.flatten(positions, true).map((obj) => obj.posn_desc )); 
    }
    console.log(uniquePositionsDesc());
    return (
            <_SidebarPartial {...me.props}>
            { Array.from(uniquePositionsDesc()).map((val, index) => <Position key={index} description={val}/>) }
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
