'use strict';

import React from 'react';
import {Link} from 'react-router';

var EntitiesApi = require('./../../api/entitiesApi');

var ButtonToStep1 = React.createClass({
  render: function() {
    return (<Link to="/SelectDataForNewRecord"><button type='button'>Proceed to Step 1</button></Link>); 
  }
});

module.exports = ButtonToStep1;
