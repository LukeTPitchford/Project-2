import bicycle from "./gifs/bike.gif";
import flame from "./gifs/flame.gif";
import carbon from "./gifs/carbon.gif";
import odometer from "./gifs/odometer.gif";
import money from "./gifs/money.gif";
import weather from "./gifs/weather.gif";
import factory from "./gifs/factory.gif";
import "./Ticker.css";
import { useEffect, useState } from "react";

function Ticker() {
  const [aqi, setAqi] = useState(null);
  const [weatherData, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/weather/51.049999/-114.066666");
      const data = await response.json();
      setWeather(data);
      const response2 = await fetch("/api/airquality/51.049999/-114.066666");
      const data2 = await response2.json();
      setAqi(data2);
    };
    getData();
  }, []);

  return (
    <>
      <div className="news-container">
        <div className="hwrap">
          <div className="hmove">
            {" "}
            {weatherData != null && aqi != null ? (
              <>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={bicycle} height="50px" width="100px"></img>
                  </a>
                  Progress:
                </div>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={flame} height="60px" width="100px"></img>
                  </a>
                  <div>Average Calories burned is:5 cal a min</div>
                </div>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={carbon} height="60px" width="100px"></img>
                  </a>
                  <div>Current co level is: {aqi.list[0].components.co}</div>
                </div>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={odometer} height="60px" width="100px"></img>
                  </a>
                  <div>KMS Cycled: 5km</div>
                </div>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={money} height="60px" width="100px"></img>
                  </a>
                  <div>Average Savings a month is:$488</div>
                </div>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={weather} height="60px" width="100px"></img>
                  </a>
                  <div>current temperature is :{weatherData.main.temp}</div>
                </div>
                <div className="hitem">
                  <a href="ticker.html">
                    <img src={factory} height="60px" width="100px"></img>
                  </a>
                  <div>Current air quality is :{aqi.list[0].main.aqi}</div>
                </div>
              </>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticker;
