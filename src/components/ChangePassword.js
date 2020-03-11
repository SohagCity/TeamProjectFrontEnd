import React, { Component } from "react";
import { Modal, Button } from "@material-ui/core";
import ReactModal from "react-modal";

class ChangePassword extends Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel="Minimal Modal Example"
      >
        <button>Close Modal</button>
      </ReactModal>
    );
  }
}

export default ChangePassword;
