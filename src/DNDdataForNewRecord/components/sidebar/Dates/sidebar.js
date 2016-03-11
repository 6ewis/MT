import React from 'react';
import DatesOfBirth from './datesOfBirth';
import DatesDeceased from './datesDeceased';
import _SidebarPartial from '../_sidebarPatial';

var Sidebar = React.createClass({
  render: function() {
    console.log("I'm in the SidebarDates and i expect the selectedEntities to be: ", this.props.selectedEntities);
    return (
            <_SidebarPartial {...this.props}>
               <DatesOfBirth />
               <DatesDeceased />
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
