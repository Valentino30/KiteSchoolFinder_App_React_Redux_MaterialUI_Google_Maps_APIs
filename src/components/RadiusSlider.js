import React from "react";
import { Slider, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  slider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default function RadiusSlider(props) {
  const handleChange = radius => {
    props.loadRadius(radius);
  };
  const classes = useStyles();
  return (
    <Container>
      <Slider
        min={1}
        defaultValue={10}
        valueLabelDisplay="auto"
        className={classes.slider}
        value={props.route.distnace}
        onChange={(e, value) => handleChange(value)}
      />
    </Container>
  );
}
