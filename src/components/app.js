import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from '../redux/reducers';

import Header from './common/header';

import EntitiesApi from '../api/entitiesApi';
import {loadData} from '../redux/actions';

let store = createStore(combinedReducers);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   EntitiesApi.getSidebar().then((data) =>
      store.dispatch(loadData(data))
    );

    $(document).foundation();
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

App.PropTypes = {
  children: PropTypes.node.isRequired
};

export default App;
