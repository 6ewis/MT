import React from 'react';
import {Row, Col} from 'react-bootstrap';
import _InputText from './shared/_inputText';
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';

export default ({options, items}) => {
  function renderInputs() {
    return items.map((item, index) => {
      return (
        <_SplitButtonWithLabel
          key= {index}
          label= {item.label}
          defaultSelection= {item.defaultSelection}
          options={options.map((item) => item.country_name)} />
             );
    });
  }

  return (
      <div>
        {renderInputs()}
      </div>
         );
};
