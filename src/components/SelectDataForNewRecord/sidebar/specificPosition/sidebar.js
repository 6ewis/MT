import React from 'react';
import _SidebarPartial from '../_sidebarPatial';

var Sidebar = React.createClass({
  render: function() {
    console.log("I'm in the SidebarSpecificPosition and i expect the selectedEntities to be: ", this.props.selectedEntities);
    return (
            <_SidebarPartial {...this.props}>
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
