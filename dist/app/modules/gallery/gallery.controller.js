"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const stream_1 = require("stream");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const gallery_service_1 = require("./gallery.service");
const cloudinary_config_1 = require("../../config/cloudinary.config");
// Helper to upload a buffer to Cloudinary using Node.js built-in Readable
const uploadBufferToCloudinary = (buffer, publicId) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary_config_1.cloudinaryUpload.uploader.upload_stream({ public_id: publicId, folder: "gcam-gallery" }, (error, result) => {
            if (error)
                return reject(error);
            resolve(result.secure_url);
        });
        const readable = stream_1.Readable.from(buffer);
        readable.pipe(uploadStream);
    });
};
const createCategory = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_service_1.GalleryService.createCategory(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Category created successfully",
        data: result,
    });
}));
const getAllCategories = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_service_1.GalleryService.getAllCategories();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Categories fetched successfully",
        data: result,
    });
}));
const uploadImages = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req.files;
    if (!files || files.length === 0) {
        return (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: "Please upload at least one image",
            data: null,
        });
    }
    // Upload each file buffer to Cloudinary
    const uploadPromises = files.map((file) => {
        const uniqueId = Math.random().toString(36).substring(2) + "-" + Date.now();
        return uploadBufferToCloudinary(file.buffer, uniqueId);
    });
    const imageUrls = yield Promise.all(uploadPromises);
    const payload = Object.assign(Object.assign({}, req.body), { imageUrls });
    const result = yield gallery_service_1.GalleryService.uploadImages(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Images uploaded successfully",
        data: result,
    });
}));
const getAllImages = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_service_1.GalleryService.getAllImages(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Images fetched successfully",
        data: result,
    });
}));
const deleteEntireCategory = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    const result = yield gallery_service_1.GalleryService.deleteEntireCategory(categoryId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Category and its images deleted permanently",
        data: result,
    });
}));
const deleteSpecificImage = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageId } = req.params;
    const { imageUrl } = req.body;
    if (!imageUrl) {
        return (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: "Image URL is required to delete",
            data: null,
        });
    }
    const result = yield gallery_service_1.GalleryService.deleteSpecificImage(imageId, imageUrl);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Selected image deleted successfully",
        data: result,
    });
}));
exports.GalleryController = {
    createCategory,
    getAllCategories,
    uploadImages,
    getAllImages,
    deleteEntireCategory,
    deleteSpecificImage,
};
//# sourceMappingURL=gallery.controller.js.map