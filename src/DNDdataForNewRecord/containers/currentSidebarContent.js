import React, {Component} from 'react';
import ContentWithDates from '../components/sidebar/dates';
import ContentWithNames from '../components/sidebar/Name/index';
import ContentWithDomicileNationalityResidence from '../components/sidebar/domicileNationalityResidence';
import ContentWithPhoneFax from '../components/sidebar/phoneFax';
import ContentWithAddress from '../components/sidebar/address';

import { connect } from 'react-redux';

function selectContent(selectedAccordion, sidebarContent) {
  switch (selectedAccordion) {
   case 'Dates':
     return <ContentWithDates content={sidebarContent}/>;
   case 'Names':
     return <ContentWithNames content={sidebarContent}/>;
   case 'Domicile/Nationality/Residence':
     return <ContentWithDomicileNationalityResidence content={sidebarContent}/>;
   case 'Phone/Fax':
     return <ContentWithPhoneFax content={sidebarContent}/>;
   case 'Address':
     return <ContentWithAddress content={sidebarContent}/>;
   default:
     return <ContentWithNames content={sidebarContent}/>;
  }
}

function mapStateToProps({selectedAccordion, sidebarContent}) {
  return { sidebar: selectContent(selectedAccordion, sidebarContent)};
}

//@connect(mapStateToProps) - to be used when upgrading to webpack
class SidebarContent extends Component {
  render() {
    let {sidebar, styleHeader, styleIconLabel, styleCursor } = this.props;

    return (
      <div>{React.cloneElement(sidebar, {styleHeader, styleIconLabel, styleCursor})}</div>
    );
  }
}

export default connect(mapStateToProps)(SidebarContent);
