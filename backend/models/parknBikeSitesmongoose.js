import mongoose from "mongoose";

const parknBikeSitesSchema = mongoose.Schema(
  {
    type: String,
    geometry: {  type: {type: String, default: 'Point'}, coordinates: [Number] },
    properties: {
      location_state: String,
      location_zip: String,
      name: {type:String,required:true,unique:true},
      latitude: Number,
      outdoor_stalls: Number,
      location_address: String,
      location_city: String,
      longitude: Number,
      web: String,
      address: String,
      indoor_stalls: Number,
    },
  },
)
export const parknBikeSites = mongoose.model(
  "parknBikeSite",
  parknBikeSitesSchema
);

export const addALocation = async (newLocation) => {
  await parknBikeSites.create(newLocation);
  console.log("new bike Parking Location is", newLocation);
  return 0;
};

export const changeLocation = async (parknBikeSiteid, update) => {

  let test = await parknBikeSites.findOneAndReplace(
    { id: parknBikeSiteid },
    update
  );
  console.log(test);
  console.log("found", parknBikeSites.name);
};

export const deleteLocation = async (parknBikeSiteid) => {
  await parknBikeSites.findOneAndDelete({
    id: parknBikeSiteid,
  });
  return getAllLocations();
};

export const getAllLocations = async () => {
  let data = await parknBikeSites.find({});
  console.log(data);
  return data;
};

export const getOneLocation = async (parknBikeSiteid) => {
  let selectedLocation = await parknBikeSites.findOne({
    id: parknBikeSiteid,
  });
  console.log(selectedLocation);
  return selectedLocation;
};
