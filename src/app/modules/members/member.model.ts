import { Schema, model } from "mongoose";
import { IMember } from "./member.interface";

const memberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["Executive", "Advisory", "General", "Volunteer"],
      required: true,
    },
    image: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    bio: { type: String, required: true },
    chapter: { type: String, required: true, default: "Michigan Chapter" },
    tag: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Member = model<IMember>("Member", memberSchema);
