import { z } from "zod";
export declare const GalleryValidationRules: {
    createCategoryValidationRules: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
    uploadImageValidationRules: z.ZodObject<{
        categoryId: z.ZodString;
        imageUrls: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    deleteSpecificImageValidationRules: z.ZodObject<{
        imageUrl: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=gallery.validation.d.ts.map