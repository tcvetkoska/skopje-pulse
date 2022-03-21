import { Route, Routes } from "react-router-dom";
import NoMatch from "./lib/global/NoMatch";
import SensorDetailsContainer from "./pages/sensorDetails/UI/SensorDetailsContainer";
import RQSensorDetailsContainer from "./pages/sensorDetailsRQ/UI/RQSensorDetailsContainer";
import SensorsContainer from "./pages/sensorsList/UI/SensorsContainer";
import RQSensorsContainer from "./pages/sensorsListRQ/UI/RQSensorsContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SensorsContainer />} />
        <Route path="/:id" element={<SensorDetailsContainer />} />
        <Route path="/reactQuery" element={<RQSensorsContainer />} />
        <Route path="/reactQuery/:id" element={<RQSensorDetailsContainer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
