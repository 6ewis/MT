import React from 'react';
import Names from './names';
import SortNames from './sortNames';
import EntityTypes from './entityTypes';
import _SidebarPartial from '../_sidebarPatial';

var Sidebar = React.createClass({
  render: function() {
    console.log("I'm in the SidebarNames and i expect the selectedEntities to be: ", this.props.selectedEntities);
    return (
            <_SidebarPartial {...this.props}>
               <EntityTypes />
               <Names />
               <SortNames />
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
