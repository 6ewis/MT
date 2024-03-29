import React, {Component} from 'react';
import {Row, Button} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from '../dumb/shared/_splitButtonWithLabel';

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
           defaultSelection="None Selected"
           options={["Preferred Name", "Address", "Phone", "Email"]}
           updateFormData={() => null}
           onSelect={this.onSelectHandler.bind(this)}
         />

        <Row>
          <Button
            onClick={(e) => this.props.spawnNewField(this.state.selected, e)}
            style={{paddingLeft: '5px'}}>
              Add New Field
          </Button>
        </Row>
      </div>
    );
  }
}
