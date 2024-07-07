import mongoose, { Schema } from "mongoose";


const jobsSeekersSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
    },
    location: {
        type: String,
    },
    skills_id: { type: Schema.Types.ObjectId, ref: "skills" },
    experience:{
        type:String,
    },
    isSeeking: {
        type: Boolean,
    },
    savedJobs: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
    applyJobs: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
    followingCompany:{ type: Schema.Types.ObjectId, ref: "companys" },
    user_Id: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true, collection: "jobSeekers" }
);


const JobSeekersSchema = mongoose.model("jobSeekers", jobsSeekersSchema);
export default JobSeekersSchema;