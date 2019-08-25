import { connect } from "react-redux";
import React, { Component } from "react";
import OriginInput from "../components/OriginInput";
import { unloadError } from "../actions/errorActions";
import {
  findNearbyHighlihgts,
  unloadHighlights
} from "../actions/highlightsActions";
import {
  loadOrigin,
  unloadDestination,
  unloadOrigin,
  unloadDirections,
  loadRadius
} from "../actions/routeActions";

class OriginInputContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.route.origin !== prevProps.route.origin) {
      if (this.props.highlights.highlights.length !== 0) {
        this.props.unloadHighlights();
      }
      if (this.props.route.destination.name !== "") {
        this.props.unloadDestination();
      }
    }
  }

  render() {
    return <OriginInput {...this.props} />;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  findNearbyHighlihgts: payload => dispatch(findNearbyHighlihgts(payload)),
  unloadDestination: () => dispatch(unloadDestination()),
  loadOrigin: payload => dispatch(loadOrigin(payload)),
  loadRadius: payload => dispatch(loadRadius(payload)),
  unloadHighlights: () => dispatch(unloadHighlights()),
  unloadDirections: () => dispatch(unloadDirections()),
  unloadOrigin: () => dispatch(unloadOrigin()),
  unloadError: () => dispatch(unloadError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OriginInputContainer);
