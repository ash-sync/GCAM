"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryValidationRules = void 0;
const zod_1 = require("zod");
const createCategoryValidationRules = zod_1.z.object({
    name: zod_1.z
        .string({ message: "Category name must be a string" })
        .min(2, { message: "Category name is too short (Minimum 2 characters)" }),
});
const uploadImageValidationRules = zod_1.z.object({
    categoryId: zod_1.z
        .string({ message: "Category ID must be a string" })
        .min(1, { message: "Category ID is required" }),
    imageUrls: zod_1.z.array(zod_1.z.string()).optional(),
});
const deleteSpecificImageValidationRules = zod_1.z.object({
    imageUrl: zod_1.z
        .string({ message: "Image URL must be a string" })
        .min(1, { message: "Image URL/Path is required to delete" }),
});
exports.GalleryValidationRules = {
    createCategoryValidationRules,
    uploadImageValidationRules,
    deleteSpecificImageValidationRules,
};
//# sourceMappingURL=gallery.validation.js.map