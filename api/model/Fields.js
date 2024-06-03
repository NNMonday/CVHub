import mongoose, { Schema } from "mongoose";
import User from './RegisteredUser.js'

const fieldsSchema = new Schema(
  {
    name: {
      type: String
    },
  },
  { timestamps: true, collection: "fields" }
);

const FieldsSchema = mongoose.model("fields", fieldsSchema);
export default FieldsSchema;
