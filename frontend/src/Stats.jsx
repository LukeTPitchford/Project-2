import React, { useEffect, useState } from "react";

const Stats = () => {
  const [aqi, setAqi] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/weather/51.049999/-114.066666");
      const data = await response.json();
      setWeather(data);
      const response2 = await fetch("/api/airquality/51.049999/-114.066666");
      const data2 = await response2.json();
      setAqi(data2);
    };
     getData()
  }, []);

  return (
    <p>
      {weather != null && aqi != null ? 
      <>
      <p>current temperature is {weather.main.temp}</p>
      <p>current air quality is {aqi.list[0].main.aqi}</p>
      </>
       : <>Loading...</>}
    </p>
  );
};

export default Stats;
