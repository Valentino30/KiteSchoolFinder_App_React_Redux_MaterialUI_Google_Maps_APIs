import "./App.css";
import React from "react";
import { Container } from "@material-ui/core";
import MapContainer from "./containers/MapContainer";
import ErrorPopupContainer from "./containers/ErrorPopupContainer";
import OriginInputContainer from "./containers/OriginInputContainer";
import DrivingDistanceContainer from "./containers/DrivingDistanceContainer";
import DriveModeButtonContainer from "./containers/DriveModeButtonContainer";

function App(props) {
  return (
    <div className="App">
      <Container>
        <OriginInputContainer {...props} />
        <DrivingDistanceContainer {...props} />
        <MapContainer {...props} />
        <DriveModeButtonContainer {...props} />
        <ErrorPopupContainer {...props} />
      </Container>
    </div>
  );
}

export default App;
