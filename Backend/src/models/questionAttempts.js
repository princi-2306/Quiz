import mongoose, { Schema } from "mongoose";
import { Attempts } from "./quizAttempts.model";

const quesAttemptSchema = new Schema(
  {
    quizAttempted: {
      type: Schema.Types.ObjectId,
      ref: "Attempts",
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
    selectedChoiceId: {
      type: Schema.Types.ObjectId,
      ref: "Choice",
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref  : "Questions"
    },
  },
  { timestamps: true }
);

export const QuestionAttempts = new mongoose.model(QuestionAttempts, quesAttemptSchema)