import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import Tabs from './components/Tabs.js';
import Sidebar from './components/sidebar/sidebar';
import reducers from './reducers';
import { initialize } from './actions/index';

import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

//should be defined outside the component - everytime SelectRecords re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class DNDdataForNewRecord extends Component {
   render() {

    store.dispatch(initialize(this.props.location.state));

    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="col-md-3" style={{position: 'fixed'}}>
            <Sidebar />
          </div>
          <div className="col-md-9 col-md-offset-3">
            <br/>
            <Tabs/>
          </div>
        </div>
      </Provider>
           );
  }
}

export default DragDropContext(HTML5Backend)(DNDdataForNewRecord);
