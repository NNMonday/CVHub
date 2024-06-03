import mongoose, { Schema } from "mongoose";


const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: Number,
    },
    loacation: {
        type: String,
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
