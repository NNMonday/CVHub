import mongoose, { Schema } from "mongoose";


const jobsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    location_id:{ type: Schema.Types.ObjectId, ref: "locations" },
    workstatus_id:{ type: Schema.Types.ObjectId, ref: "workStatus" },
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
    fields_id: { type: Schema.Types.ObjectId, ref: "fields" },
    required_skills_id: [{ type: Schema.Types.ObjectId, ref: "skills" }],
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    
  },
  { timestamps: true, collection: "jobs" }
);

const Jobs = mongoose.model("jobs", jobsSchema);
export default Jobs;
