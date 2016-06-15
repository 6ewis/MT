import React, {Component} from 'react';

export default ({updateData}) => {
  const renderInput = (updateData) => {
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateFormData}
          />
        </Col>
         <Col md={2} style={{paddingLeft: '0px'}}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Col>
      </Row>
  }
  
  return (
    renderInput(updateData);
  );
};
