import mongoose, { Schema } from "mongoose";

const choicesSchema = new Schema(
  {
    choiceText: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref : "Questions"
    },
  },
  { timestamps: true }
); 

export const Choice = mongoose.model("Choice", choicesSchema);