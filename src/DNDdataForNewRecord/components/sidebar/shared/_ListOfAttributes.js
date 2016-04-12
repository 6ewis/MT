import React from 'react';
import _BoxSource from '../../../containers/DND/_BoxSource';
import R from 'ramda';

export default ( {
   styleHeader, content, styleCursor, attributeName,
   attributeTitle, boxSourceType, boxSourceComponent
  }) => {

 function renderAttributes() {
   const createElementWithNewProps = (key, index) => {
     const draggedItem = {attribute: attributeName, value: key[attributeName], id: key.id};
     const newProps = {
       _draggedItem: draggedItem,
       attributeValue: key[attributeName],
       id: key.id,
       key: index,
       cursor: styleCursor.cursor
    };
    return React.createElement(_BoxSource(boxSourceType, boxSourceComponent), newProps);
  };

  const retrieveAttributeValue = R.map(R.path(['props', 'attributeValue']));

  const alreadyProcessed = (resultList, item) => {
    const arrayOfAttributeValues = retrieveAttributeValue(resultList);
    return R.contains(item[attributeName], arrayOfAttributeValues);
  };

  const processItem = (results, item, index) => {
    if (alreadyProcessed(results, item)) {return results; }
    return R.append(createElementWithNewProps(item, index), results);
  };

  const listAttributes = R.addIndex(R.reduce)(processItem, [], content);
  const notValid = R.all(R.compose(R.either(R.isNil, R.isEmpty),
    R.when(R.is(String), R.trim)))(retrieveAttributeValue(listAttributes));

  return ( <div>
             <h4 style={styleHeader}> {attributeTitle} </h4>
             {notValid ? "No data available" : listAttributes }
           </div>
         );
 }

 return renderAttributes();
};
