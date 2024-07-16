import mongoose, { Schema } from "mongoose";

const jobsSeekersSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      default: "Default Fullname",
    },
    gender: {
      type: String,
      default: "Not Specified",
    },
    dob: {
      type: Date,
      default: Date.now, // or another default date
    },
    location: {
      type: String,
      default: "Default Location",
    },
    skills_id: {
      type: Schema.Types.ObjectId,
      ref: "skills",
    },
    experience: {
      type: String,
      default: "No Experience",
    },
    isSeeking: {
      type: Boolean,
      default: true,
    },
    savedJobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "jobs",
      },
    ],
    applyJobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "jobs",
      },
    ],
    followingCompanies: [
      {
        type: Schema.Types.ObjectId,
        ref: "companys",
      },
    ],
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    about: {
      type: String,
      default: "About me",
    },
  },
  {
    timestamps: true,
    collection: "jobSeekers",
  }
);

const JobSeekersSchema = mongoose.model("jobSeekers", jobsSeekersSchema);
export default JobSeekersSchema;
