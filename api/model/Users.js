import mongoose, { Schema } from "mongoose";


const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
        type: Number,
    },
    loacation: {
        type: String,
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    password:{
        type:String,
    },
    avatar: {
        type: String,
    },
    role_id: { type: Schema.Types.ObjectId, ref: "Roles" },
  },
  { timestamps: true, collection: "users" }
);

const UsersSchema = mongoose.model("users", usersSchema);
export default UsersSchema;
