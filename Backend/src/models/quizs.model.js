import mongoose, { Schema } from "mongoose";



const quizSchema = new Schema(
  {
    pdfId: {
      type: Schema.Types.ObjectId,
      ref: "Pdf",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    desription: {
      type: String,
      required: true,
        },
        lastAttempted : { 
            type: Number,
            default : 0
        },
        questions: [
            {
                type: Schema.Types.ObjectId,
                ref : "Questions"
            }    
        ]
  },
  { timestamps: true }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
