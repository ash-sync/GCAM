import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await GallaryService.createCategory(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await GallaryService.getAllCategories();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Categories fetched successfully",
    data: result,
  });
});

const uploadImages = catchAsync(async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const body = { ...req.body };

  if (!files || files.length === 0) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "Please upload at least one image",
      data: null,
    });
  }

  const imageUrls = files.map((file) => file.path);
  const payload = { ...body, imageUrls };

  const result = await GallaryService.uploadImages(payload);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Images uploaded successfully",
    data: result,
  });
});
