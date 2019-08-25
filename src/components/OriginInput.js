import "./geoSuggest.css";
import React from "react";
import Geosuggest from "react-geosuggest";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RadiusSlider from "./RadiusSlider";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  text: {
    margin: theme.spacing(3)
  },
  button: {
    marginBottom: theme.spacing(3)
  }
}));

export default function OriginInput(props) {
  const classes = useStyles();

  const onSuggestSelect = suggest => {
    if (suggest !== undefined) {
      const originName = suggest.description;
      const originLat = suggest.location.lat;
      const originLng = suggest.location.lng;

      if (props.route.origin.name !== "") props.unloadOrigin();
      if (props.error.error.message !== "") props.unloadError();
      if (props.route.directions !== "") props.unloadDirections();

      props.loadOrigin({ originName, originLat, originLng });
    } else {
      if (props.route.directions !== "") {
        props.unloadDirections();
      }
      if (props.route.origin.name !== "") {
        props.unloadOrigin();
      }
    }
  };

  const handleClick = (originLat, originLng) => {
    const radius = props.route.radius.range;

    if (props.error.error.message !== "") props.unloadError();
    if (props.route.directions !== "") props.unloadDirections();
    if (props.route.destination.name !== "") props.unloadDestination();

    props.findNearbyHighlihgts({ radius, originLat, originLng });
  };

  return (
    <Container>
      <Geosuggest
        placeholder="Add City"
        onSuggestSelect={onSuggestSelect}
        location={new window.google.maps.LatLng("", "")}
        radius="20"
      />
      <Typography variant="h6" className={classes.text}>
        Maximum Distance -{" "}
        {props.route.radius.range + " " + props.route.radius.metric}
      </Typography>
      <RadiusSlider {...props} />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
        onClick={() =>
          handleClick(props.route.origin.lat, props.route.origin.lng)
        }
      >
        Find Kite Schools Nearby
      </Button>
    </Container>
  );
}
