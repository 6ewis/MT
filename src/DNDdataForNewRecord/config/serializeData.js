import R from 'ramda';

export default (data) => {
  const serializeNullValue = value => (value === 'null' ? null : value);

  const serializeEntityType = entity_type => {
    switch (entity_type) {
      case 'I': return 'Individual';
      case 'C': return 'Company';
    }
  };

  const curryPrefixAddress = R.curry((prefix, value) => `${prefix}${value}`);
  const fields = (prefix) => R.map(curryPrefixAddress(prefix),
    ['_line_1', '_line_2', '_line_3', '_line_4', '_locality', '_region', '_postal_code', '_country_name']);

  const addRegisteredAddress = (object) =>
    R.assoc('concatenated_registered_address',
      R.join(" ", R.props(fields('regaddr'), object)))(object);

  const addMailingAddress = (object) =>
    R.assoc('concatenated_mailing_address',
      R.join(" ", R.props(fields('mailaddr'), object)))(object);

  const addDividendAddress = (object) =>
    R.assoc('concatenated_dividend_address',
      R.join(" ", R.props(fields('divaddr'), object)))(object);

  const updateEntityType = R.evolve({
    'entity_type': serializeEntityType
  });

  const objectUpdater = R.compose(addMailingAddress, addDividendAddress, addRegisteredAddress, R.map(serializeNullValue), updateEntityType);
  return R.map(objectUpdater, data);
};
