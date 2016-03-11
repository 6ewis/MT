import React from 'react';
import Domiciles from './domiciles';
import Nationalities from './nationalities';
import Residences from './residences';
import _SidebarPartial from '../_sidebarPatial';

var Sidebar = React.createClass({
  render: function() {
    console.log("I'm in the SidebarDNR and i expect the selectedEntities to be: ", this.props.selectedEntities);
    return (
            <_SidebarPartial {...this.props}>
               <Nationalities />
               <Residences />
               <Domiciles />
            </_SidebarPartial>
       );
 }
});

export default Sidebar;
