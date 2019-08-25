import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

export default function DriveModeButton(props) {
  const classes = useStyles();

  const googleMapsRedirect =
    "https://www.google.com/maps/dir/?api=1&origin=" +
    props.route.origin.lat +
    "," +
    props.route.origin.lng +
    "&destination=" +
    props.route.destination.lat +
    "," +
    props.route.destination.lng +
    "&travelmode=driving&dir_action=navigate";

  return (
    <Container>
      {props.route.destination.name === "" ? (
        ""
      ) : (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
          href={googleMapsRedirect}
        >
          Get me there!
        </Button>
      )}
    </Container>
  );
}
