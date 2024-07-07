import mongoose, { Schema } from "mongoose";


const companySchema = new Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    organization_type: {
      type: Number,
      required: true
    },
    website: {
      type: String,
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    employee_quantity: {
      type: Number,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users"
    },
  },
  {
    timestamps: true,
    collection: "companys"
  }
);

const ComapnySchema = mongoose.model("companys", companySchema);
export default ComapnySchema;
