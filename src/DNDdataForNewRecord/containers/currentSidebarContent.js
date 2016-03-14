import React, {Component} from 'react';
import ContentWithDates from '../components/sidebar/Dates/index';
import ContentWithNames from '../components/sidebar/Name/index';

import { connect } from 'react-redux';
  //data ajax req to serve return with minimun possible data for the sidebar
  //data coming from reducers depending on the accordion
  //sidebarWithNamesContent
  let first_entity1 = {
    id: "1231",
    entity_type: "Individual",
    name: "John Smith",
    sort_name: "JOHN SMITH"
  };
  
  let second_entity1 = {
    id: "123331",
    entity_type: "Company",
    name: "John T. Smith",
    sort_name: "SMITH T JOHN"
  };
 let content1 = [first_entity1, second_entity1];

 //sidebarWithDatesContent
  let first_entity2 = {
    id: "1231",
    birthDate: "23/21/10",
    deathDate: "00/03/33"
  };
  
  let second_entity2 = {
    id: "123331",
    birthDate: "25/21/10",
    deathDate: "01/03/33"
  };

  let content2 = [first_entity2, second_entity2];

function selectContent(selectedAccordion) {
  switch (selectedAccordion) {
   case 'Dates':
     return <ContentWithDates content={content2}/>;
   case 'Name':
     return <ContentWithNames content={content1}/>;
   default:
     return <ContentWithNames content={content1}/>;
  }
}

function mapStateToProps({selectedAccordion}) {
  return { content: selectContent(selectedAccordion)};
}

//@connect(mapStateToProps)
class SidebarContent extends Component {
  render() {
    let {content} = this.props;
    return (
      <div>{content}</div>
    );
  }
}

export default connect(mapStateToProps)(SidebarContent);
