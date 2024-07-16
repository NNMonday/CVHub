import mongoose, { Schema } from "mongoose";

const fieldsSchema = new Schema(
  {
    name: {
      type: String,
    },
    icon: String,
  },
  { timestamps: true, collection: "fields" }
);

const Field = mongoose.model("fields", fieldsSchema);
export default Field;
