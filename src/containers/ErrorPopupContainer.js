import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorPopup from "../components/ErrorPopup";
import { unloadError } from "../actions/errorActions";

class ErrorPopupContainer extends Component {
  render() {
    return <ErrorPopup {...this.props} />;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  unloadError: payload => dispatch(unloadError(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPopupContainer);
