import React, {Component} from 'react';
import {Row, SplitButton, Button, MenuItem} from 'react-bootstrap';

import _Label from './shared/_label';
import _SplitButton from './shared/_splitButton';
import R from 'ramda';

export default class Aliases extends Component {
  constructor(props) {
    super(props);
    this.state = {
     numberOfAliases: 1
    };
    this.renderAliases = this.renderAliases.bind(this);
  }
  renderAliases(n) {
    return (
      <Row key={n} className="form-inline" style={{marginBottom: '0.2%'}}>
         <_SplitButton data={this.props.data} fieldName={this.props.fieldName}/>
         &nbsp; <input type="text" className="form-control"/>
         &nbsp;
         <i style={{cursor: "pointer"}} 
            onClick ={() => this.setState({numberOfAliases: --this.state.numberOfAliases})}
            className="fa fa-minus-circle makeItRed" ariaHidden="true">
         </i>
      </Row>
    );
  }
  render() {
    return (
      <div>
        <Row>
          <_Label name="Aliases" />
        </Row>
        {R.times(this.renderAliases, this.state.numberOfAliases)}
        <br/>
        <Row>
          <Button
            bsStyle="primary"
            onClick={() => this.setState({numberOfAliases: ++this.state.numberOfAliases})}> 
              + Add Alias
          </Button>
        </Row>
        <br/>
      </div>
    );
 }
}
