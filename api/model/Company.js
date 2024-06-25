import mongoose, { Schema } from "mongoose";
import User from './RegisteredUser.js'

const companySchema = new Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    website: {
        type: String,
    },
    description:{
        type:String,
    },
    employee_quantity: {
        type: Number,
    },
    user_id: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true, collection: "company" }
);

const ComapnySchema = mongoose.model("company", companySchema);
export default ComapnySchema;
