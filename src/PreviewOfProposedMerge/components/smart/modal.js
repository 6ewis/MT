import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
//third party libs
import R from 'ramda';

export default class ModalClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showDuplicatesNames: null
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
    this.showDuplicates();

  }

  childrenWithProps() {
    return React.cloneElement(this.props.children, { onClick: this.open.bind(this) });
  }

  showDuplicates() {
     const { initialData } = this.props.store.getState();
      const { duplicatePersonToBeMerged } = initialData;
      if (duplicatePersonToBeMerged) {
        const pickName = (obj, index) => <li key={index}>{R.prop('name')(obj)}</li>;
        const showDuplicatesNames = R.addIndex(R.map)(pickName, R.values(duplicatePersonToBeMerged));
        this.setState({showDuplicatesNames: showDuplicatesNames});
      }
  }

  render() {
    return (
       <div>
        {this.childrenWithProps()}

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Duplicate Merge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure the following corporate persons and all of their respective positions in Delphi should be updated
              to use the new corporate person about to be created?
            </p>

            <hr />

            <h4>Duplicate Corporate Persons to be merged</h4>
            <ul>
              {this.state.showDuplicatesNames}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={null}>
              <i className="fa fa-check" aria-hidden="true"></i>
              Yes, Complete The Merge
            </Button>
            <Button
              onClick={this.close.bind(this)}>
              <i className="fa fa-times" aria-hidden="true"></i>
              {"I'm not ready to merge yet"}
            </Button>
          </Modal.Footer>
        </Modal>
     </div>);
  }
}
