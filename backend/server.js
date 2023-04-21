import express from "express";
import dotenv from "dotenv";
import { Geo } from "geojson";



const app = express();
dotenv.config()
const PORT = 4000;
app.use(express.json());






app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});