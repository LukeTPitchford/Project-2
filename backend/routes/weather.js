import express from "express";
import dotenv from "dotenv";

dotenv.config();

const weatherRouter = express.Router();

weatherRouter.get("/:lat/:lon", async (req, res) => {
        let lat = req.params.lat;
        let lon = req.params.lon;
  

  const climateApi =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=` +
    process.env.TOKEN;
  console.log(climateApi);
  try {
    const result = await fetch(climateApi).then(function (response) {
      return response.json();
    });

    console.log(result);

    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

export default weatherRouter;