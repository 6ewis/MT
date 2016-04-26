import React from 'react';
import {Row, Col} from 'react-bootstrap';
import _InputText from './shared/_inputText';
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';

export default ({data, items}) => {
  function renderInputs() {
    return items.map((item, index) => {
      return (
        <_SplitButtonWithLabel
          key= {index}
          label= {item.label}
          defaultSelection= {item.defaultSelection}
          fieldName="country"
          data={data} />
             );
    });
  }

  return (
      <div>
        {renderInputs()}
      </div>
         );
};
