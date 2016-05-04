import React from 'react';
import R from 'ramda';

export default ({attributeValue, id, connectDragSource,
                 opacity, backgroundColor, cursor}) => {


  const removeNullAndBlankStringsInArray = (array) => {
    const isAString = R.is(String);
    const trimString = R.when(isAString, R.trim);
    const isAnEmptyString = (text) => R.isEmpty(trimString(text));
    const isANullValue = (text) => R.isNil(text);
    const nullOrEmpty = R.either(isANullValue, isAnEmptyString);

    return R.reject(nullOrEmpty, array);
  };

  const renderAttributeValue = () => {
    //take into account new line character
    const splitAttribute = removeNullAndBlankStringsInArray(attributeValue.split('\n'));
    const splitAttributeLength = splitAttribute.length;
console.log(JSON.stringify(splitAttribute));
    return splitAttribute
      .map((item, index) =>
         <div key={index}><span>{item}</span><br/>{((index > 0) && (index === (splitAttributeLength - 1))) ? <br/> : null}</div>);
  }; //it could returns an empty array

  return connectDragSource(
    <div className='DNDhover' style={{opacity, backgroundColor, cursor}}>
      {R.isNil(attributeValue) || R.isEmpty(renderAttributeValue()) ? null : renderAttributeValue()}
    </div>
  );
};
