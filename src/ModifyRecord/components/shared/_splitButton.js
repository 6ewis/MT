import React, {Component} from 'react';
import {Row, SplitButton, MenuItem} from 'react-bootstrap';


export default class _SplitButton extends Component {
  constructor(props) {
    super(props);
    const {data, defaultSelection, fieldName} = props;
    this.state = {
      title: (defaultSelection || data[0][fieldName])
    };
  }

  renderMenuItems() {
    const {data, fieldName} = this.props;
    //We pass fieldName in order to reuse the component
    return data.map((item) => {
     return (item[fieldName] === this.state.title) ?
       null :
     ( <MenuItem
         onClick={() => this.setState({title: item[fieldName]})} 
         key={item.id + fieldName}
         eventKey={item.id}>{item[fieldName]}
       </MenuItem>);
    });
  }

  render() {
    return (
      <SplitButton bsStyle='default'
        title={this.state.title}
        id='split-button-basic-{this.props.fieldName}'>
       {this.renderMenuItems()}
      </SplitButton>
    );
  }
}
