import {BsSunrise, BsCloudFog2, BsSunset} from "react-icons/bs"
import {useContext} from "react"
import { WeatherContext } from "../context/WeatherState";
    function AddInfo() {
      const a = useContext(WeatherContext);
        return (<div className="w-addInfo">
            <div className="sunrise">
              <BsSunrise />
              <span className="rise-value">{a.state.sunrise} AM</span>
            </div>
            <div className="windSpeed">
              <BsCloudFog2 />
              <span className="wind-value">{a.state.wind_speed} m/s</span>
            </div>
            <div className="sunset">
              <BsSunset />
              <span className="set-value">{a.state.sunset} AM</span>
            </div>
          </div>);
      }
  
export default AddInfo