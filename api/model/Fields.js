import mongoose, { Schema } from "mongoose";

const fieldsSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true, collection: "fields" }
);

const Field = mongoose.model("fields", fieldsSchema);
export default Field;
