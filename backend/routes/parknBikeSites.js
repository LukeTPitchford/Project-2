import express, { response } from 'express';

import { addALocation,changeLocation,getAllLocations,deleteLocation,getOneLocation } from '../models/parknBikeSitesmongoose.js';



const router = express.Router();



router.post("/", async (request, response) => {
    const newLocation = request.body;
    console.log(newLocation);
    const id = await addALocation(newLocation);
    response.send(`Yey! For new locations! Added ${ newLocation.properties.name}`)});

   
    router.patch("/", (request, response) => {
        const bikeParkingLocationid = request.query._id;
        const changeData = request.body;
        changeLocation(bikeParkingLocationid, changeData);
        response.send(`${ changeData.properties.name}Location edited`);
    });


router.get("/",async (request, response)=> {
    const bikeParkingLocationid = request.query._id;
    response.send(await getOneLocation(bikeParkingLocationid));

})






    
    router.get("/all",async(request,response)=> {
       
        response.send (await getAllLocations());
        
    });

    router.delete("/",async (request,response)=> {
        const bikeParkingLocationid = request.query._id;
        deleteLocation(bikeParkingLocationid);
        response.send(await deleteLocation(bikeParkingLocationid))
    });

    
export default router;
