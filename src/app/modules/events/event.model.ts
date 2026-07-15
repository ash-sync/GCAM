import { Schema, model } from "mongoose";
import { IEvent } from "./event.interface";

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "General" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Event = model<IEvent>("Event", eventSchema);
