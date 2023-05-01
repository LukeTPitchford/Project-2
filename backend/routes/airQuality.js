import express from "express";
import dotenv from "dotenv";

dotenv.config();

const airQualityRouter = express.Router();

airQualityRouter.get("/:lat/:lon", async (req, res) => {
  let lat = req.params.lat;
  let lon = req.params.lon;

  const weatherApi =
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=` +
    process.env.TOKEN;
  console.log(weatherApi);
  try {
    const result = await fetch(weatherApi).then(function (response) {
      return response.json();
    });

    console.log(result);

    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

export default airQualityRouter;
