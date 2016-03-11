import React from 'react';
import NameSidebar from '../components/sidebar/Name/index';

export default (props) => {
  let styleHeader = {
    fontWeight: 'bold'
  };

  let styleIconLabel = {
    marginBottom: '5%'
  };

  //data ajax req to serve return with minimun possible data for the sidebar
  //data coming from reducers depending on the accordion
  let first_entity = {
    id: "1231",
    entity_type: "Individual",
    name: "John Smith",
    sort_name: "JOHN SMITH"
  };
  
  let second_entity = {
    id: "123331",
    entity_type: "Company",
    name: "John T. Smith",
    sort_name: "SMITH T JOHN"
  };

  let content = [first_entity, second_entity];

  return (
    <div>
      <center>
      <br/>
      <div className="well well-lg">
        <NameSidebar content={content} styleHeader={styleHeader} styleIconLabel={styleIconLabel}/>
      </div>
      </center>
   </div>
     );
};
