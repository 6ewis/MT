import React from 'react';
import Cities from './cities';
import Provinces from './provinces';
import ZipCodes from './zipCodes';
import Countries from './countries';
import _SidebarPartial from '../_sidebarPatial';

var Sidebar = React.createClass({
  render: function() {
    console.log("I'm in the SidebarAddress and i expect the selectedEntities to be: ", this.props.selectedEntities);
    return (
            <_SidebarPartial {...this.props}>
               <Cities />
               <Provinces />
               <ZipCodes />
               <Countries />
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
