import R from 'ramda';

export default (data) => {
  let serializeNullValue = value => (value === 'null' ? null : value);

  let serializeEntityType = entity_type => {
    switch (entity_type) {
      case 'I': return 'Individual';
      case 'C': return 'Company';
    }
  };
  
  let updateEntityType = R.evolve({
    'entity_type': serializeEntityType
  });

  let objectUpdater = R.compose(R.map(serializeNullValue), updateEntityType);
  return R.map(objectUpdater, data);
};
