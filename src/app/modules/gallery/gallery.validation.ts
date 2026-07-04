import { z } from "zod";

const createCategoryValidationRules = z.object({
  name: z
    .string({ message: "Category name must be a string" })
    .min(2, { message: "Category name is too short (Minimum 2 characters)" }),
});

const uploadImageValidationRules = z.object({
  categoryId: z
    .string({ message: "Category ID must be a string" })
    .min(1, { message: "Category ID is required" }),
  imageUrls: z.array(z.string()).optional(),
});

const deleteSpecificImageValidationRules = z.object({
  imageUrl: z
    .string({ message: "Image URL must be a string" })
    .min(1, { message: "Image URL/Path is required to delete" }),
});

export const GalleryValidationRules = {
  createCategoryValidationRules,
  uploadImageValidationRules,
  deleteSpecificImageValidationRules,
};
