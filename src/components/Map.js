import React from "react";
import { Container } from "@material-ui/core";
import { compose, withProps, lifecycle } from "recompose";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} from "react-google-maps";

const google = window.google;

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: document.getElementById("googleAPI").src,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%`, marginBottom: "24px" }} />
  }),
  withGoogleMap,
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.highlights !== prevProps) {
        const DirectionsService = new google.maps.DirectionsService();

        const origin = {
          lat: this.props.origin.lat,
          lng: this.props.origin.lng
        };
        const destination = {
          lat: this.props.destination.lat,
          lng: this.props.destination.lng
        };

        DirectionsService.route(
          {
            origin: new google.maps.LatLng(origin.lat, origin.lng),
            destination: new google.maps.LatLng(
              destination.lat,
              destination.lng
            ),
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result
              });
            }
          }
        );
      }
    }
  })
)(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={new google.maps.LatLng(props.origin.lat, props.origin.lng)}
  >
    {props.isMarkerShown && <Marker position={props.origin} />}
    {props.areMarkersShown &&
      props.highlights.map(highlight => (
        <Marker
          key={highlight.id}
          position={highlight.geometry.location}
          onClick={() => props.handleClick(highlight)}
        />
      ))}
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
    areMarkersShown: false
  };

  componentDidMount() {
    this.setState({ isMarkerShown: true });
  }

  componentDidUpdate() {
    if (this.props.highlights.highlights.length !== 0) {
      this.setState({ areMarkersShown: true });
    }
  }

  handleClick = highlight => {
    const destinationName = highlight.name;
    const destinationLat = highlight.geometry.location.lat;
    const destinationLng = highlight.geometry.location.lng;

    this.props.loadDestination({
      name: destinationName,
      lat: destinationLat,
      lng: destinationLng
    });
    this.props.loadDirections({
      origin: {
        lat: this.props.route.origin.lat,
        lng: this.props.route.origin.lng
      },
      destination: {
        lat: destinationLat,
        lng: destinationLng
      }
    });
  };

  render() {
    return (
      <Container>
        {this.props.route.origin.name === "" ? (
          ""
        ) : (
          <MapWithADirectionsRenderer
            isMarkerShown={this.state.isMarkerShown}
            areMarkersShown={this.state.areMarkersShown}
            highlights={this.props.highlights.highlights}
            origin={{
              lat: this.props.route.origin.lat,
              lng: this.props.route.origin.lng
            }}
            destination={{
              lat: this.props.route.destination.lat,
              lng: this.props.route.destination.lng
            }}
            loadDirections={this.props.loadDirections}
            handleClick={this.handleClick}
          />
        )}
      </Container>
    );
  }
}

export default Map;
