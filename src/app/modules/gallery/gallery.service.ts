import { ICategory, IImage } from "./gallery.interface";
import { Category, Gallery } from "./gallery.model";

const createCategory = async (payload: ICategory) => {
  return await Category.create(payload);
};

const getAllCategories = async () => {
  return await Category.find();
};

const uploadImages = async (payload: IImage) => {
  const isExist = await Gallery.findOne({ categoryId: payload.categoryId });

  if (isExist) {
    return await Gallery.findByIdAndUpdate(
      isExist._id,
      { $push: { imageUrls: { $each: payload.imageUrls } } },
      { new: true },
    );
  }

  return await Gallery.create(payload);
};

const getAllImages = async (query: any) => {
  const filter: any = {};
  if (query.categoryId) filter.categoryId = query.categoryId;
  return await Gallery.find(filter).populate("categoryId");
};

const deleteEntireCategory = async (categoryId: string) => {
  await Gallery.deleteMany({ categoryId });

  return await Category.findByIdAndDelete(categoryId);
};

const deleteSpecificImage = async (imageId: string, imageUrl: string) => {
  return await Gallery.findByIdAndUpdate(
    imageId,
    {
      $pull: { imageUrls: imageUrl },
    },
    { new: true },
  );
};

export const GalleryService = {
  createCategory,
  getAllCategories,
  uploadImages,
  getAllImages,
  deleteEntireCategory,
  deleteSpecificImage,
};
