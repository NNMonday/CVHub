import mongoose, { Schema } from "mongoose";

const workStatusSchema = new Schema(
  {
    workStatus_name: {
      type: String,
    },
  },
  { timestamps: true, collection: "workStatus" }
);

const WorkStatusSchema = mongoose.model("workStatus", workStatusSchema);
export default WorkStatusSchema;
