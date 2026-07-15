"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = require("../../middlewares/validateRequest");
const gallery_controller_1 = require("./gallery.controller");
const multer_config_1 = require("../../config/multer.config");
const gallery_validation_1 = require("./gallery.validation");
const route = (0, express_1.Router)();
route.post("/create-category", 
//   checkAuth(Role.ADMIN),
(0, validateRequest_1.validateRequest)(gallery_validation_1.GalleryValidationRules.createCategoryValidationRules), gallery_controller_1.GalleryController.createCategory);
route.get("/categories", gallery_controller_1.GalleryController.getAllCategories);
route.post("/upload-images", 
//   checkAuth(Role.ADMIN),
multer_config_1.multerUpload.array("images", 10), (0, validateRequest_1.validateRequest)(gallery_validation_1.GalleryValidationRules.uploadImageValidationRules), gallery_controller_1.GalleryController.uploadImages);
route.get("/", gallery_controller_1.GalleryController.getAllImages);
route.delete("/category/:categoryId", 
//   checkAuth(Role.ADMIN),
gallery_controller_1.GalleryController.deleteEntireCategory);
route.patch("/delete-single-image/:imageId", 
//   checkAuth(Role.ADMIN),
gallery_controller_1.GalleryController.deleteSpecificImage);
exports.GalleryRoutes = route;
//# sourceMappingURL=gallery.routes.js.map