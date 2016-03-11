import React from 'react';
import Fax from './fax';
import Phones from './phones';
import _SidebarPartial from '../_sidebarPatial';

var Sidebar = React.createClass({
  render: function() {
    console.log("I'm in the SidebarPhoneFax and i expect the selectedEntities to be: ", this.props.selectedEntities);
    return (
            <_SidebarPartial {...this.props}>
               <Phones />
               <Fax />
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
