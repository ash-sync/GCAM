import { Schema, model } from "mongoose";
import { IAd } from "./ad.interface";

const adSchema = new Schema<IAd>(
  {
    sponsorName: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true, trim: true },
    type: { type: String, enum: ["banner", "card"], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Ad = model<IAd>("Ad", adSchema);
