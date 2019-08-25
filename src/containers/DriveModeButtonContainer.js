import { connect } from "react-redux";
import React, { Component } from "react";
import DriveModeButton from "../components/DriveModeButton";

class DriveModeButtonContainer extends Component {
  render() {
    return <DriveModeButton {...this.props} />;
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(DriveModeButtonContainer);
