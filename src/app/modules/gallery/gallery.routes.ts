import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";

import { checkAuth } from "../../middlewares/checkAuth";

import { GalleryController } from "./gallery.controller";
import { multerUpload } from "../../config/multer.config";
import { GalleryValidationRules } from "./gallery.validation";

const route = Router();

route.post(
  "/create-category",
  //   checkAuth(Role.ADMIN),
  validateRequest(GalleryValidationRules.createCategoryValidationRules),
  GalleryController.createCategory,
);

route.get("/categories", GalleryController.getAllCategories);

route.post(
  "/upload-images",
  //   checkAuth(Role.ADMIN),
  multerUpload.array("images", 10),
  validateRequest(GalleryValidationRules.uploadImageValidationRules),
  GalleryController.uploadImages,
);

route.get("/", GalleryController.getAllImages);

route.delete(
  "/category/:categoryId",
  //   checkAuth(Role.ADMIN),
  GalleryController.deleteEntireCategory,
);

route.patch(
  "/delete-single-image/:imageId",
  //   checkAuth(Role.ADMIN),
  GalleryController.deleteSpecificImage,
);

export const GalleryRoutes = route;
