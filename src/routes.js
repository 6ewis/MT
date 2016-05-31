import React from 'react';

import {Route, IndexRoute} from 'react-router';
import { render } from 'react-dom';
//move the import of line 7-12 here for consistency
//turn that to es6 homie


const App = React.createClass({
  render() {
    return (
      <div>
        {/*The header goes here */}
        {this.props.children}
      </div>
      );
    }
});

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={require("./SelectRecords/index.js")} />
      <Route path="SelectRecordsToMerge" component={require('./SelectRecords/index.js')} />
      <Route path="SelectDataForNewRecord" component={require('./DNDdataForNewRecord/index.js')} />
      <Route path="ModifyRecord" component={require('./ModifyRecord/index.js')} />
      <Route path="*" component={require('./404.js')} />
    </Route>
);

export default routes;
