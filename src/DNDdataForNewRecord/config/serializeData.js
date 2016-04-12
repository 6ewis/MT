import R from 'ramda';

export default (data) => {
  let serializeNullValue = value => (value === 'null' ? null : value);

  let serializeEntityType = entity_type => {
    switch (entity_type) {
      case 'I': return 'Individual';
      case 'C': return 'Company';
    }
  };

  let addRegisteredAddress = (object) => R.assoc('concatenated_registered_address', 
                                                 `${object.regaddr_line_1 || ''} 
                                                  ${object.regaddr_line_2 || ''} 
                                                  ${object.regaddr_line_3 || ''} 
                                                  ${object.regaddr_line_4 || ''} 
                                                  ${object.regaddr_locality || ''} 
                                                  ${object.regaddr_region || ''} 
                                                  ${object.regaddr_postal_code || ''} 
                                                  ${object.regaddr_country_name || ''}
                                                  `)(object);

  let updateEntityType = R.evolve({
    'entity_type': serializeEntityType
  });

  let objectUpdater = R.compose(addRegisteredAddress, R.map(serializeNullValue), updateEntityType);
  return R.map(objectUpdater, data);
};
