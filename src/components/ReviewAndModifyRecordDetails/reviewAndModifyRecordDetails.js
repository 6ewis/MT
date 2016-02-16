import React from 'react';
import InputField from './inputField';
import Dropdown from './dropdown';
import RoundedSwitch from '../common/roundedSwitch';
import DateInput from './dateInput';
import Address from './Address';
import { connect } from 'react-redux';
import {setReviewPage} from '../../redux/actions';
//Tabs - move the files into common folder
import FoundationTabs from '../common/foundationTabs/foundationTabs';
import Tabs from '../common/foundationTabs/tabs';
import Tab from '../common/foundationTabs/tab';
import TabContent from '../common/foundationTabs/content';
import TabContents from '../common/foundationTabs/contents';
//transitionButton
import BackButton from '../common/transition/backButton';
import NextButton from '../common/transition/nextButton';
import CancelButton from '../common/transition/cancelButton';

let positionInfoClone = [];

//look at react mixin for mixins with es6
//https://github.com/brigand/react-mixin
let ReviewAndModifyRecordDetails = React.createClass({
  handleChange: function(name, value) {
    positionInfoClone[name] = value;
  },
  render: function() {
   const {dispatch, content, location} = this.props;
   positionInfoClone = this.props.location.state.data[0].positionInfoClone;
   let arrangedData = {
     content: content,
     positionInfoClone: positionInfoClone
   };
   return (
      <div className="row">
        <div className="medium-9 columns">
           <FoundationTabs>
             <Tabs>
               <Tab id="#panel1" active="true">
                  Corporate Person
                </Tab>
                {location.state.data.map(
                   (item) => item.tab
                )}
             </Tabs>

             <TabContents>
              {location.state.data.map(
                 (item) => 
                   (<TabContent id={"panel" + item.positionInfoClone.matter}>
                     <InputField label="Preferred Name"
                                 type="text" 
                                 value={item.positionInfoClone.preferred_name}
                                 onChange={this.handleChange.bind(this, 'preferred_name')}/>
                     <InputField label="Address"
                                 type="text"
                                 value={item.positionInfoClone.address}
                                 onChange={this.handleChange.bind(this, 'address')}
                                 />
                     <InputField label="Title"
                                 type="text"
                                 value={item.positionInfoClone.title}
                                 onChange={this.handleChange.bind(this, 'title')}
                                 />
                     <InputField label="Email"
                                 type="text"
                                 value={item.positionInfoClone.email}
                                 onChange={this.handleChange.bind(this, 'email')}
                                 />
                     <InputField label="Phone number"
                                 type="text"
                                 value={item.positionInfoClone.phone_number}
                                 onChange={this.handleChange.bind(this, 'phone_number')}
                                 />
                   </TabContent>)
               )}

               <TabContent id="panel1" active="true">
                 <div>
                     <Dropdown label="Entity Type" value={content.entityType}/>
                     <InputField label="Name" type="text" value={content.name} onChange={this.onChange}/>
                     <InputField label="Sort Name" type="text" value={content.sortName}/>
                     <div className="row">
                       <div className="large-8 columns">
                         <RoundedSwitch title="Conyers Employee"/>
                       </div>
                     </div>
                     <DateInput value={content.dateOfBirth} title="Birth Date"/>
                     <DateInput value={content.dateDeceased} title="Deceased Date"/>
                     <InputField label="Title" type="text" value="Mr."/>
                     <InputField label="Nationality" type="text" value={content.nationality}/>
                     <InputField label="Country of Residence" type="text" value={content.residence}/>
                     <InputField label="Country of Domicile" type="text" value={content.domicile}/>
                     <InputField label="Phone" type="text" value={content.phone}/>
                     <InputField label="Fax" type="text" value={content.fax}/>
                     <InputField label="Telex" type="text" value={content.telex}/>
                     <InputField label="Email" type="text" value={content.email}/>
                     <Address title="Registered Address" content={content} />
                     <Address title="Merged Address" content={content}/>
                 </div>

               </TabContent>

              </TabContents>
        </FoundationTabs>
          <div className="row">
            <div className="medium-4 columns">
              <BackButton url="/SelectDataForNewRecord"/>
            </div>
            <div className="medium-4 columns">
              <NextButton url="/PreviewOfProposedMerge" 
                          content= "Proceed To Step 3" 
                          data={
                            {
                             data: arrangedData
                            }
                          }/>
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

//to be refactored = we dont need to use redux here - react router has been updated with a better way
//to handle data via Link
function select(state) {
 return {
   content: state.reviewContent
 };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReviewAndModifyRecordDetails);
