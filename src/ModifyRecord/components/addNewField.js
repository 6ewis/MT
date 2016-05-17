import React, {Component} from 'react';
import {Row, Button} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';

export default class AddNewField extends Component {
  constructor() {
    super();
    this.state = {selected: null};
  }

  onSelectHandler(event) {
    this.setState({selected: event.target.value});
  }

  render() {
    return (
      <div>
        <_SplitButtonWithLabel
           label="New Field"
           defaultSelection="~ None Selected ~"
           options={["~ None Selected ~", "Preferred Name", "Address", "Phone", "Email"]}
           onSelect={this.onSelectHandler.bind(this)}
         />

        <Row>
          <Button
            onClick={this.props.spawnNewField.bind(this, this.state.selected)}
            style={{paddingLeft: '0px'}}>
              Add New Field
          </Button>
        </Row>
      </div>
    );
  }
}
