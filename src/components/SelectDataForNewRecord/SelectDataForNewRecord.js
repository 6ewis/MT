'use strict';

import React from 'react';
//Accordion
import FoundationAccordion from './foundationAccordion/foundationAccordion';
import AccordionHeader from './foundationAccordion/header';
import AccordionContent from './foundationAccordion/content';
//Tabs
import FoundationTabs from '../common/foundationTabs/foundationTabs';
import Tabs from '../common/foundationTabs/tabs' ;
import Tab from '../common/foundationTabs/tab' ;
import TabContent from '../common/foundationTabs/content';
import TabContents from '../common/foundationTabs/contents';
//roundcorner
import RoundSquare from './../common/roundedSquare';
import RoundedSwitch from './../common/roundedSwitch';
//sidebar
import SidebarNames from './sidebar/Name/sidebar';
import SidebarDates from './sidebar/Dates/sidebar';
import SidebarDNR from './sidebar/DomicileNationalityResidence/sidebar';
import SidebarPhones from './sidebar/PhoneFax/sidebar';
import SidebarAddress from './sidebar/Address/sidebar';
import SidebarPositions from './sidebar/Positions/sidebar';
import SpecificPositions from './sidebar/specificPosition/sidebar';
//transitionButton
import BackButton from '../common/transition/backButton';
import NextButton from '../common/transition/nextButton';
import CancelButton from '../common/transition/cancelButton';
//redux
import { connect } from 'react-redux';
import {setSiderBar, dropElement, reset} from '../../redux/actions';
//inputField
import InputField from '../ReviewAndModifyRecordDetails/inputField';
import _ from 'lodash';
//variables for the review pages - to be refactored
let dynamicTabs = [];
let positionInfoClone = null;

let SelectDataForNewRecord = React.createClass({
  getInitialState: function() {
   return {dynamicTab: null};
  },
  //
  handleChange: function(name, value) {
   console.log("the positionInfoClone is", positionInfoClone);
   console.log("the event is", value);
   console.log(" we update the positionInfoClone");
   positionInfoClone[name] = value;
  },
  //pretty much for the review page - move in its own component
  spawnNewTab: function(tabTitle, positionInfo) {
        let me = this;
        positionInfoClone = _.clone(positionInfo, true);
        this.setState({dynamicTab: <Tab id={"#panel" + positionInfo.matter} dispatch = {() => this.props.dispatch(setSiderBar("SpecificPositions"))}>{tabTitle + '\n' + "M#" + positionInfo.matter}</Tab>,
                   dynamicTabContents: <TabContent id={"panel" + positionInfo.matter}>
                                          <FoundationAccordion>
                                            <AccordionHeader name="Address">
                                              <AccordionContent>
                                                <InputField label="Address"
                                                            type="text"
                                                            value= {positionInfo.address}
                                                            onChange={this.handleChange.bind(this, 'address')}/>
                                              </AccordionContent>
                                           </AccordionHeader>
                                           </FoundationAccordion>
                                            <FoundationAccordion>
                                            <AccordionHeader name="Details">
                                              <AccordionContent active="true">
                                               <table>
                                               <tbody>
                                                 <tr>
                                                   <th>Matter</th>
                                                   <td> {positionInfo.matter} </td>
                                                 </tr>
                                                 <tr>
                                                   <th>Client Number</th>
                                                   <td>{positionInfo.client_number}</td>
                                                 </tr>
                                                 <tr>
                                                   <th>Company Type</th>
                                                   <td>{positionInfo.company_type}</td>
                                                 </tr>
                                                 <tr>
                                                   <th>Position Description</th>
                                                   <td>{positionInfo.posn_desc}</td>
                                                 </tr>
                                                 <tr>
                                                   <th>Client Name</th>
                                                   <td>{positionInfo.client_name}</td>
                                                 </tr>
                                                <tr>
                                                   <th>Preferred Name</th>
                                                   <td>
                                                    <InputField type="text" 
                                                                value={positionInfo.preferred_name}
                                                                onChange={this.handleChange.bind(this, 'preferred_name')}/>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <th>Title</th>
                                                   <td>
                                                     <InputField type="text" 
                                                                 value={positionInfo.title}
                                                                 onChange={this.handleChange.bind(this, 'title')}/>

                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <th>Phone number</th>
                                                   <td>
                                                     <InputField type="text"
                                                                 value={positionInfo.phone_number}
                                                                 onChange={this.handleChange.bind(this, 'phone_number')} />
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <th> Email </th>
                                                   <td>
                                                     <InputField type="text" 
                                                                 value={positionInfo.email}
                                                                 onChange={this.handleChange.bind(this, 'email')} />
                                                   </td>

                                                 </tr>
                                                </tbody>
                                               </table>
                                              </AccordionContent>
                                           </AccordionHeader>
                                           </FoundationAccordion>

                                         </TabContent>

    },
     function() {
       dynamicTabs.push({
         tab: this.state.dynamicTab,
         content: this.state.dynamicTabContents,
         positionInfo: positionInfo,
         positionInfoClone: positionInfoClone
       });
     }
    );
  },
  render: function() {
       const {dispatch, sidebar} = this.props;

      function actions(arg) {
        /* eslint no-shadow:0 */
        let sidebar = arg;
        return { elementDropped: (attribute, cpref, content) => dispatch(dropElement(attribute, cpref, content, sidebar)),
                 reset: (attribute, cpref) => dispatch(reset(attribute, cpref, sidebar))
               };
       }

      return (
      <div className="row">
         {sidebar}
        <div className="medium-9 columns">
           <FoundationTabs>
             <Tabs>
              <Tab dispatch={() => dispatch(setSiderBar("Name"))} id="#panel1" active="true">
                  Corporate Person
              </Tab>
             <Tab dispatch={() => dispatch(setSiderBar("Positions"))} id="#panel4">
                 + Add Position Specific 
              </Tab>
              {this.state.dynamicTab}
             </Tabs>

             <TabContents>
               <TabContent id="panel1" active="true">
                  <FoundationAccordion style={{overflow: 'scroll', width: "725px", height: "500px"}}>
                     <AccordionHeader onClick={() => dispatch(setSiderBar('Name'))} name="Name">
                        <AccordionContent active="true">
                            <RoundSquare title="Entity Type" {...actions("Name")}/>
                            <RoundSquare title="Name" {...actions("Name")}/>
                            <RoundSquare title="Sort Name" {...actions("Name")}/>
                            <RoundedSwitch title="Conyers Employee" {...actions("Name")}/>
                        </AccordionContent>
                     </AccordionHeader>

                     <AccordionHeader onClick={() => dispatch(setSiderBar('Dates'))} name="Dates">
                        <AccordionContent>
                           <RoundSquare title="Date of Birth" {...actions("Dates")}/>
                           <RoundSquare title="Date Deceased" {...actions("Dates")} />
                        </AccordionContent>
                     </AccordionHeader>

                     <AccordionHeader onClick={() => dispatch(setSiderBar('DNR'))} name="Domicile Nationality Residence">
                        <AccordionContent>
                           <RoundSquare title="Nationality" {...actions("DNR")}/>
                           <RoundSquare title="Residence" {...actions("DNR")}/>
                           <RoundSquare title="Domicile" {...actions("DNR")}/>
                        </AccordionContent>
                     </AccordionHeader>

                    <AccordionHeader onClick={() => dispatch(setSiderBar('Phone Fax'))} name="Phone Fax">
                        <AccordionContent>
                           <RoundSquare title="Phone" {...actions("Phone Fax")}/>
                           <RoundSquare title="Fax" {...actions("Phone Fax")}/>
                        </AccordionContent>
                    </AccordionHeader>

                   <AccordionHeader onClick={() => dispatch(setSiderBar('Address'))} name="Address">
                        <AccordionContent>
                           <RoundSquare title="City" {...actions("Address")}/>
                           <RoundSquare title="Province Or State" {...actions("Address")}/>
                           <RoundSquare title="Postal Code Or Zip Code" {...actions("Address")}/>
                           <RoundSquare title="Country" {...actions("Address")}/>
                        </AccordionContent>
                    </AccordionHeader>

                    <AccordionHeader name="Billing Client">
                        <AccordionContent>
                           <RoundSquare title="Billing Client" />
                        </AccordionContent>
                    </AccordionHeader>
                    </FoundationAccordion>
               </TabContent>

               <TabContent id="panel4">
                 <FoundationAccordion>
                   <AccordionHeader name="Position">
                        <AccordionContent active='true'>
                           <RoundSquare title="Position" spawnNewTab={this.spawnNewTab} {...actions("Positions")} />
                        </AccordionContent>
                   </AccordionHeader>
                 </FoundationAccordion>
               </TabContent>

               {this.state.dynamicTabContents}

             </TabContents>
           </FoundationTabs>
          <div className="row">
            <div className="medium-4 columns">
              <BackButton url="/SelectRecordsToMerge"/>
            </div>
            <div className="medium-4 columns">
              <NextButton url="/ReviewAndModifyRecordDetails" content= "Proceed To Step 2" data={{ data: dynamicTabs }}/>
            </div>
            <div className="medium-4 columns">
              <CancelButton />
            </div>
          </div>
        </div>
      </div>
   );
 }
});

//SelectDataForNewRecord.propTypes = {
//  entities:
//};

function selectSidebar(sidebar, sidebarContent) {
  switch (sidebar) {
    case 'Dates':
      return <SidebarDates selectedEntities= {sidebarContent}/>;
    case 'Name':
      return <SidebarNames selectedEntities= {sidebarContent}/>;
    case 'Address':
      return <SidebarAddress selectedEntities= {sidebarContent}/>;
    case 'Phone Fax':
      return <SidebarPhones selectedEntities= {sidebarContent}/>;
    case 'DNR':
      return <SidebarDNR selectedEntities= {sidebarContent}/>;
    case 'Positions':
      return <SidebarPositions selectedEntities= {sidebarContent} />;
    case 'SpecificPositions':
      return <SpecificPositions selectedEntities={sidebarContent} />;
  }
}

function select(state) {
 return {
   sidebar: selectSidebar(state.sidebar, state.sidebarContent)
 };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(SelectDataForNewRecord);
