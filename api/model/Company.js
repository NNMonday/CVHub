import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    employee_quantity: {
      type: Number,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
    collection: "companys",
  }
);

const Company = mongoose.model("company", companySchema);
export default Company;
