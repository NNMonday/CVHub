import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema(
  {
    location_name: {
      type: String,
    },
  },
  { timestamps: true, collection: "locations" }
);

const LocationSchema = mongoose.model("locations", locationSchema);
export default LocationSchema;
