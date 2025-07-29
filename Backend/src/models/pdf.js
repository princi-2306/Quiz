import mongoose, { Schema } from "mongoose";

const pdfSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    fileName: {
        type: String,
        },
        fileSize: {
        type : Number
        },
        fileUrl: {
            type : String
        }
  },
  { timestamps: true }
);

export const Pdf = mongoose.model("Pdf", pdfSchema);