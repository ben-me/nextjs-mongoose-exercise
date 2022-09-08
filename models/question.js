import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: Number, required: true },
  options: [{ type: String, required: true }],
});

const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;
