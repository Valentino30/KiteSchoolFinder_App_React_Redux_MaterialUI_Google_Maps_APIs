import React, { Component } from "react";
import Map from "../components/Map";
import { connect } from "react-redux";
import { loadDirections, loadDestination } from "../actions/routeActions";

class MapContainer extends Component {
  render() {
    return <Map {...this.props} />;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loadDirections: payload => dispatch(loadDirections(payload)),
  loadDestination: payload => dispatch(loadDestination(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
