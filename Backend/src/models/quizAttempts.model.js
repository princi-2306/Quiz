import mongoose, { Schema } from "mongoose";

const quizAttemptsSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    attemptedAt: {
      type: timestamp,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    quizId: {
        type: Schema.Types.ObjectId,
        ref : "Quiz"
    },
  },
  { timestamps: true }
);

export const Attempts = mongoose.model("Attempts", quizAttemptsSchema);