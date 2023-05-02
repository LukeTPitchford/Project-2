import express, { request, response } from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import bikeParkingLocationsRouter from "./routes/bikeParkingLocations.js";
import parknBikeSitesRouter from "./routes/parknBikeSites.js";
import airQualityRouter from "./routes/airQuality.js";
import weatherRouter from "./routes/weather.js";



const app = express();

const PORT = 5050;

app.use(express.json());

dotenv.config();

let db = await mongoose.connect(process.env.MONGO_URL);

app.use("/api/parkinglocations",bikeParkingLocationsRouter);

app.use("/api/parknbikesites",parknBikeSitesRouter);

app.use("/api/airquality", airQualityRouter);

app.use("/api/weather", weatherRouter);

app.get("/test", (request,response) => {
response.send("test endpoint working ")

})
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});


