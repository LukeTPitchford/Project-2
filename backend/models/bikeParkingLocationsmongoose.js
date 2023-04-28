import mongoose from "mongoose";

const bikeParkingLocationsSchema = mongoose.Schema(
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

  
);
export const bikeParkingLocations = mongoose.model(
  "bikeParkingLocations",
  bikeParkingLocationsSchema
);

export const addALocation = async (newLocation) => {
  await bikeParkingLocations.create(newLocation);
  console.log("new bike Parking Location is", newLocation);
  return 0;
};

export const changeLocation = async (bikeParkingLocationid, update) => {

  let test = await bikeParkingLocations.findOneAndReplace(
    { id: bikeParkingLocationid },
    update
  );
  console.log(test);
  console.log("found", bikeParkingLocations.name);
};

export const deleteLocation = async (bikeParkingLocationid) => {
  await bikeParkingLocations.findOneAndDelete({
    id: bikeParkingLocationid,
  });
  return getAllLocations();
};

export const getAllLocations = async () => {
  let data = await bikeParkingLocations.find({});
  console.log(data);
  return data;
};

export const getOneLocation = async (bikeParkingLocationid) => {
  let selectedLocation = await bikeParkingLocations.findOne({
    id: bikeParkingLocationid,
  });
  console.log(selectedLocation);
  return selectedLocation;
};
