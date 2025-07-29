import { ScrollSmoother } from "gsap/all";
import mongoose, { Schema } from "mongoose";

const questionsSchema = new Schema(
  {
    quizId: {
          type: Schema.Types.ObjectId,
        ref : "Quiz"
        },
        questionText: {
            type: String,
            required : true
        }
  },
  { timestamps: true }
);

export const Questions  = mongoose.model("Questions", questionsSchema)