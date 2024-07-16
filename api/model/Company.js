import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    company_name: {
      type: String,
      required: true,
      default: "Company Name",
    },
    website: {
      type: String,
      default: "",
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "locations",
    },
    description: {
      type: String,
      required: true,
      default: "Default Description",
    },
    employee_quantity: {
      type: Number,
      default: 0,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    company_id: {
      type: Schema.Types.ObjectId,
      ref: "companys",
    },
  },
  {
    timestamps: true,
    collection: "companys",
  }
);

const Company = mongoose.model("company", companySchema);
export default Company;
