import { connect } from "react-redux";
import React, { Component } from "react";

import DrivingDistance from "../components/DrivingDistance";

class DrivingDistanceContainer extends Component {
  render() {
    return <DrivingDistance {...this.props} />;
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(DrivingDistanceContainer);
