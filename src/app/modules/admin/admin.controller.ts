import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";

const loginAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.loginAdmin(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Logged in Successfully",
    data: result,
  });
});

const createInvite = catchAsync(async (req: Request, res: Response) => {
  const createdBy = req.user.id;

  const result = await AdminService.createInvite(req.body.email, createdBy);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Invite sent successfully",
    data: result,
  });
});
