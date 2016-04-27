import React, { Component } from 'react';
//Components
import Tabs from './components/Tabs';
import Sidebar from './components/sidebar/sidebar';
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


//should be defined outside the component - otherwise everytime it re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class DNDdataForNewRecord extends Component {
   constructor(props) {
     super(props);
     store.dispatch(initialize(props.location.state));
   }

   renderNextButton() {
     let {originalData, sidebarContent} = store.getState();
     console.log("should rerender when sidebar change but does not")
    // debugger;
     return (
       <NextButton url="/ModifyRecord" state={{}}/>
     );
   }

   render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="col-md-3" style={{position: 'fixed'}}>
            <Sidebar />
          </div>
          <div className="col-md-9 col-md-offset-3" style={{marginBottom: '1%'}}>
            <br/>
            <Tabs/>
             <div className="col-md-3 col-md-offset-3">
               <BackButton url="/SelectRecordsToMerge"/>
             </div>
             <div className="col-md-3">
               {this.renderNextButton()}
             </div>
             <div className="col-md-3">
               <CancelButton />
             </div>
          </div>
        </div>
      </Provider>
           );
  }
}

export default DragDropContext(HTML5Backend)(DNDdataForNewRecord);
