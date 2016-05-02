import React from 'react';
import R from 'ramda';
import moment from 'moment';

export default (data) => {
  //Date
  const formatDate = (date) => (date === null) ? date : moment(date).format('L');
  //New line Characters
  const addNewLine = (address) => `${address}\\n \\n`;
  //will come back to that
  const replaceMultipleNewLineChars = (string) => string.replace(/(?:\\n){2,}/g, "\n");
  const prettifyString = R.compose(replaceMultipleNewLineChars, addNewLine);
  //Entity Type
  const serializeEntityType = entity_type => {
    switch (entity_type) {
      case 'I': return 'Individual';
      case 'C': return 'Company';
    }
  };

  const transformation = R.evolve({
    'entity_type': serializeEntityType,
    'deceased_date': formatDate,
    'birth_date': formatDate,
    'concatenated_registered_address': prettifyString,  //making sure there's a new line between different addreses
    'concatenated_mailing_address': prettifyString,
    'concatenated_dividend_address': prettifyString
  });

  const serializeNullValue = (value) => R.compose(R.either(R.isNil, R.isEmpty),
    R.when(R.is(String), R.trim))(value) ?
    null :
    value;

  const curryPrefixAddress = R.curry((prefix, value) => `${prefix}${value}`);
  const fields = (prefix) => R.map(curryPrefixAddress(prefix),
    ['_line_1', '_line_2', '_line_3', '_line_4', '_locality', '_region', '_postal_code', '_country_name']);

  const addRegisteredAddress = (object) =>
    R.assoc('concatenated_registered_address',
      R.join("\\n", R.props(fields('regaddr'), object)))(object);

  const addMailingAddress = (object) =>
    R.assoc('concatenated_mailing_address',
      R.join("\\n", R.props(fields('mailaddr'), object)))(object);

  const addDividendAddress = (object) =>
    R.assoc('concatenated_dividend_address',
      R.join("\\n", R.props(fields('divaddr'), object)))(object);


  const objectUpdater = R.compose(transformation, addMailingAddress, addDividendAddress, addRegisteredAddress, R.map(serializeNullValue));
  return R.map(objectUpdater, data);
};
