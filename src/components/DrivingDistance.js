import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

export default function DrivingDistance(props) {
  return (
    <Container>
      {props.route.directions === "" ? (
        ""
      ) : (
        <Typography component="div" variant="body1">
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            padding="0px 24px"
          >
            {props.route.directions.duration.text} by car (
            {props.route.directions.distance.text})
          </Box>
        </Typography>
      )}
    </Container>
  );
}
