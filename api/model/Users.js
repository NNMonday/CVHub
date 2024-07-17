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
        default:
        "https://res.cloudinary.com/djzdhtdpj/image/upload/v1704269768/tempAvatar_juqb4s.jpg",
    },
    role_id: { type: Schema.Types.ObjectId, ref: "roles" },
  },
  { timestamps: true, collection: "users" }
);

const UsersSchema = mongoose.model("users", usersSchema);
export default UsersSchema;
