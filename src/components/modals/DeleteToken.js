import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal, deleteToken } from '../../actions/actions.js';

class DeleteToken extends Component {
  constructor(props) {
    super(props);
    this.cancelFunction = this.cancelFunction.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (this.props.display !== prevProps.display) {
      return true;
    }
    return false;
  }

  cancelFunction(e) {
    this.props.closeModal('displayDeleteToken');
  }

  deleteToken(e) {
    this.props.deleteToken(this.props.token.address);
    this.props.closeModal('displayDeleteToken');
  }

  render() {
    let divStyle;
    if (!this.props.display) divStyle = { display: 'none' };
    return (
      <div className={this.props.display} style={divStyle}>
        <section className="dapp-modal-container" style={divStyle}>
          <p>
            Do you want to remove the token{' '}
            <strong>{this.props.token.name}</strong> from your list?
          </p>
          <div className="dapp-modal-buttons">
            <button className="cancel" onClick={e => this.cancelFunction(e)}>
              Cancel
            </button>
            <button
              className="ok dapp-primary-button"
              onClick={e => this.deleteToken(e)}
            >
              OK
            </button>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { closeModal, deleteToken }
)(DeleteToken);
