import { Request, Response } from "express";
import { Readable } from "stream";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { GalleryService } from "./gallery.service";
import { cloudinaryUpload } from "../../config/cloudinary.config";

// Helper to upload a buffer to Cloudinary using Node.js built-in Readable
const uploadBufferToCloudinary = (
  buffer: Buffer,
  publicId: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinaryUpload.uploader.upload_stream(
      { public_id: publicId, folder: "gcam-gallery" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result!.secure_url);
      },
    );
    const readable = Readable.from(buffer);
    readable.pipe(uploadStream);
  });
};

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await GalleryService.createCategory(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await GalleryService.getAllCategories();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Categories fetched successfully",
    data: result,
  });
});

const uploadImages = catchAsync(async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "Please upload at least one image",
      data: null,
    });
  }

  // Upload each file buffer to Cloudinary
  const uploadPromises = files.map((file) => {
    const uniqueId =
      Math.random().toString(36).substring(2) + "-" + Date.now();
    return uploadBufferToCloudinary(file.buffer, uniqueId);
  });

  const imageUrls = await Promise.all(uploadPromises);

  const payload = {
    ...req.body,
    imageUrls,
  };

  const result = await GalleryService.uploadImages(payload);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Images uploaded successfully",
    data: result,
  });
});

const getAllImages = catchAsync(async (req, res) => {
  const result = await GalleryService.getAllImages(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Images fetched successfully",
    data: result,
  });
});

const deleteEntireCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;

  const result = await GalleryService.deleteEntireCategory(
    categoryId as string,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category and its images deleted permanently",
    data: result,
  });
});

const deleteSpecificImage = catchAsync(async (req, res) => {
  const { imageId } = req.params;
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "Image URL is required to delete",
      data: null,
    });
  }

  const result = await GalleryService.deleteSpecificImage(
    imageId as string,
    imageUrl,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Selected image deleted successfully",
    data: result,
  });
});

export const GalleryController = {
  createCategory,
  getAllCategories,
  uploadImages,
  getAllImages,
  deleteEntireCategory,
  deleteSpecificImage,
};
