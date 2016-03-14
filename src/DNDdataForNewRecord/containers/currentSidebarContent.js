import React, {Component} from 'react';
import ContentWithDates from '../components/sidebar/Dates/index';
import ContentWithNames from '../components/sidebar/Name/index';

import { connect } from 'react-redux';

function selectContent(selectedAccordion, sidebarContent) {
  switch (selectedAccordion) {
   case 'Dates':
     return <ContentWithDates content={sidebarContent}/>;
   case 'Names':
     return <ContentWithNames content={sidebarContent}/>;
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
    let {sidebar} = this.props;
    return (
      <div>{sidebar}</div>
    );
  }
}

export default connect(mapStateToProps)(SidebarContent);
