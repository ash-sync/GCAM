import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AdService } from "./ad.service";
import { StatusCodes } from "http-status-codes";

const createAd = catchAsync(async (req: Request, res: Response) => {
  const result = await AdService.createAd(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Advertisement created successfully",
    data: result,
  });
});

const getAllAds = catchAsync(async (req: Request, res: Response) => {
  const result = await AdService.getAllAds();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Advertisements retrieved successfully",
    data: result,
  });
});

const getAdById = catchAsync(async (req: Request, res: Response) => {
  const result = await AdService.getAdById(req.params.id as string);
  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: "Advertisement not found",
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Advertisement retrieved successfully",
    data: result,
  });
});

const updateAd = catchAsync(async (req: Request, res: Response) => {
  const result = await AdService.updateAd(req.params.id as string, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Advertisement updated successfully",
    data: result,
  });
});

const deleteAd = catchAsync(async (req: Request, res: Response) => {
  const result = await AdService.deleteAd(req.params.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Advertisement deleted successfully",
    data: result,
  });
});

export const AdController = {
  createAd,
  getAllAds,
  getAdById,
  updateAd,
  deleteAd,
};
