import React from 'react';
import InputField from './inputField';

let Address = React.createClass({
  render: function() {
    let {content} = this.props;
    return (
      <div>
        {this.props.title}
        <InputField label="Address Line 1" type="text" value=""/>
        <InputField label="Address Line 2" type="text" value=""/>
        <InputField label="Address Line 3" type="text" value=""/>
        <InputField label="Address Line 4" type="text" value=""/>
        <InputField label="Locality" type="text" value={content.city}/>
        <InputField label="Region" type="text" value={content.province}/>
        <InputField label="Postal Code" type="text" value={content.zipCode}/>
        <InputField label="Country" type="text" value={content.country}/>
      </div>
    );
  }
});

export default Address;
