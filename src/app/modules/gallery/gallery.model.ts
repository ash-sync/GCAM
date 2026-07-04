import { model, Schema } from "mongoose";
import { ICategory, IImage } from "./gallery.interface";

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const Category = model<ICategory>("Category", categorySchema);

const GallerySchema = new Schema<IImage>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    imageUrls: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const Gallery = model<IImage>("Gallery", GallerySchema);
