import mongoose, { Schema } from "mongoose";
import User from './RegisteredUser.js'

const jobsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
        type: String,
    },
    loacation: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    workstatus_id:{ type: Schema.Types.ObjectId, ref: "WorkStatus" },
    required_experience:{
        type:Number,
    },
    deadline: {
        type: Date,
    },
    desciption: {
        type: String,
    },
    applicant_requirements: {
        type: String,
    },
    benifits: {
        type: String,
    },
    fields_id: { type: Schema.Types.ObjectId, ref: "Fields" },
    required_skills_id: { type: Schema.Types.ObjectId, ref: "Skills" },
    user_id: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true, collection: "jobs" }
);

const JobsSchema = mongoose.model("jobs", jobsSchema);
export default JobsSchema;