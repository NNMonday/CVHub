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
    loacation: {
        type: String,
    },
    skills_id: { type: Schema.Types.ObjectId, ref: "Skills" },
    experience:{
        type:String,
    },
    isSeeking: {
        type: Boolean,
    },
    savedJobs: { type: Schema.Types.ObjectId, ref: "Jobs" },
    followingCompany:{ type: Schema.Types.ObjectId, ref: "Company" },
    user_Id: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true, collection: "jobSeekers" }
);

const JobSeekersSchema = mongoose.model("jobSeekers", jobsSeekersSchema);
export default JobSeekersSchema;
