import express from "express";
import dotenv from "dotenv";

dotenv.config();

const airQualityRouter = express.Router();

airQualityRouter.get("/", async (req, res) => {
  // let lat = req.params.lat;
  // let lon = req.params.lon;

  const weatherApi =
    `http://api.openweathermap.org/geo/1.0/direct?q=Calgary,124&limit=1&appid=` +
    process.env.TOKEN;
  console.log(weatherApi);
  try {
    const result = await fetch(weatherApi).then(function (response) {
      return response.json();
    });

    console.log(result);

    res.send(result[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

export default airQualityRouter;
