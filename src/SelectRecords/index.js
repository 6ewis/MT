import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import SearchBar from './containers/searchBar';
import Sidebar from './containers/sidebar';
import ListOfEntities from './containers/listOfEntities';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

class SelectRecords extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="container-fluid">
           <Sidebar />
           <div className="col-md-10">
             <SearchBar />
             <br/>
             <ListOfEntities />
           </div>
         </div>
       </Provider>

           );
  }
}

export default SelectRecords;
