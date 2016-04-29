import React, {Component} from 'react';
import {Row, SplitButton, MenuItem} from 'react-bootstrap';


export default class _SplitButton extends Component {
  constructor(props) {
    super(props);
    const {options, defaultSelection} = props;
    this.state = {
      title: (defaultSelection || options[0])
    };
  }

  renderMenuItems() {
    const {options} = this.props;
    //We pass fieldName in order to reuse the component
    return options.map((item, index) => {
     return (item === this.state.title) ?
       null :
     ( <MenuItem
         onClick={() => this.setState({title: item})}
         key={index}
         eventKey={index}>{item}
       </MenuItem>);
    });
  }

  render() {
    return (
      <SplitButton bsStyle='default'
        {...this.props.disabled}
        title={this.state.title}
        id='split-button-basic-{this.props.fieldName}'>
       {this.renderMenuItems()}
      </SplitButton>
    );
  }
}
