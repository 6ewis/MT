import React from 'react';

import {Route, IndexRoute} from 'react-router';
//move the import of line 7-12 here for consistency

const routes = (
    <Route path="/" component={require("./components/app.js")}>
      <IndexRoute component={require("./components/homePage.js")} />
      {/* <Route path="SelectRecordsToMerge" component={require('./components/SelectRecordsToMerge/SelectRecordsToMerge.js')} /> */}
      <Route path="SelectRecordsToMerge" component={require('./SelectRecords/index.js')} />
      <Route path="SelectDataForNewRecord" component={require('./components/SelectDataForNewRecord/SelectDataForNewRecord.js')} />
      <Route path="ReviewAndModifyRecordDetails" component={require('./components/ReviewAndModifyRecordDetails/reviewAndModifyRecordDetails.js')} />
      <Route path="PreviewOfProposedMerge" component={require('./components/PreviewOfProposedMerge/previewOfProposedMerge')} />
      <Route path="*" component={require('./components/404.js')} />
    </Route>
);

export default routes;
