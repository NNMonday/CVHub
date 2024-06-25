import mongoose, { Schema } from "mongoose";

const rolesSchema = new Schema(
  {
    role_name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true, collection: "roles" }
);

const RolesSchema = mongoose.model("roles", rolesSchema);
export default RolesSchema;
