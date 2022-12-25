import "./App.css";
import { BsFillGrid3X3GapFill, BsCloudDrizzle } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import AddInfo from "./components/AddInfo";
import { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./context/WeatherState";
import LocationDate from "./components/LocationDate";
function App() {
  const a = useContext(WeatherContext);
  const [data, setData] = useState(a.state);
  function handleRefresh() {
    a.update();
    setData(a.state);
  }
  useEffect(() => {
    a.update();
    setData(a.state);
  }, [a.state]);
  return (
    <div className="App">
      <div className="toggle-container">
        
      </div>
      <div className="container">
        <div className="Header">
          <BsFillGrid3X3GapFill className="h-child" />
          <label>Weatheria</label>
          <FiRefreshCw className="h-child" onClick={handleRefresh} />
        </div>
        <LocationDate />
        <div className="temperature">{data.temperature}°C</div>
        <div className="line">-------------</div>
        <div className="w-desc">{data.description}</div>
        <div className="t-max-min">
          <span className="t-min">{data.temp_min}°C</span>/
          <span className="t-max">{data.temp_max}°C</span>
        </div>
        <div className="w-icon">
          <BsCloudDrizzle />
        </div>
        <AddInfo />
      </div>
    </div>
  );
}

export default App;
