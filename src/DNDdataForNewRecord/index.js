import React, { Component } from 'react';
//Components
import Tabs from './components/Tabs';
import Sidebar from './components/sidebar/sidebar';
import _Spinner from '../shared/_Spinner.js';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import { initialize } from './actions/index';
//Transition Buttons
import {BackButton, NextButton, CancelButton} from '../shared/transitionButtons/index.js';
//DND
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
//Utility Libs
import {Col} from 'react-bootstrap';
import R from 'ramda';

//should be defined outside the component - otherwise everytime it re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class DNDdataForNewRecord extends Component {
   constructor(props) {
     super(props);
     this.selectedIds = props.location.state.selectedEntities.map((item) => item.id ).join(",");
     store.dispatch(initialize(this.selectedIds));
   }

   renderNextButton() {
     return (
       <NextButton
         url="/ModifyRecord"
         state={{store: store,
                 selectedIds: this.selectedIds
                }}/>
     );
   }

   renderSidebarAndTabs() {
     return (
          <div className="container-fluid">
            <Col md={3} style={{position: 'fixed'}}>
              <Sidebar />
            </Col>
            <Col md={9} mdOffset={3} style={{marginBottom: '1%'}}>
              <br/>
              <Tabs/>
               <Col md={2}>
               </Col>
               <Col md={3}>
                 <BackButton url="/SelectRecordsToMerge"/>
               </Col>
               <Col md={3}>
                 {this.renderNextButton()}
               </Col>
               <Col md={3}>
                 <CancelButton />
               </Col>
               <Col md={1}>
               </Col>
            </Col>
          </div>
     );
   }

   render() {
    return (
      <Provider store={store}>
         {this.renderSidebarAndTabs()}
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(DNDdataForNewRecord);
