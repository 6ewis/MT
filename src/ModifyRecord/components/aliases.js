//need to be refactored - technical debt due to approaching dateline
//numberOfAliases should not be negative otherwise it returns an error
import React, {Component} from 'react';
import {Row, SplitButton, Button, MenuItem} from 'react-bootstrap';

import _Label from './shared/_label';
import _SplitButton from './shared/_splitButton';
import R from 'ramda';

export default class Aliases extends Component {
  constructor(props) {
    super(props);
    this.state = {
     numberOfAliases: 0,
     data: props.data,
     value: null
    };
    this.renderNewAliases = this.renderNewAliases.bind(this);
  }
  renderNewAliases(n, alias) {
    return (
      <Row key={n} className="form-inline">
         <_SplitButton data={[{"alias_type": 'AKA'}, {"alias_type": 'FKA'}]} fieldName={"alias_type"}/>
         &nbsp; <input onChange={(e) => this.seState({value: e.target.val})} type="text" value={alias || this.state.value} className="form-control"/>
         &nbsp;
         <i style={{cursor: "pointer"}}
            onClick ={() => alias ?
              this.setState({data: R.remove(n, 1, this.state.data)}) :
              this.setState({numberOfAliases: --this.state.numberOfAliases})}
            className="fa fa-minus-circle makeItRed" ariaHidden="true">
         </i>
         <br/>
      </Row>
    );
  }

  renderKnownAliases() {
    return this.state.data.map((item, index) => this.renderNewAliases(index, item.alias));
  }

  render() {
    return (
      <div>
        <Row>
          <_Label name="Aliases" />
        </Row>
        {this.renderKnownAliases()}
        {R.times(this.renderNewAliases, this.state.numberOfAliases)}
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
