import mongoose, { Schema } from "mongoose";


const skillsSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true, collection: "skills" }
);

const SkillsSchema = mongoose.model("skills", skillsSchema);
export default SkillsSchema;
