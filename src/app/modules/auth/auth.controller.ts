import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { Request, Response } from "express";
import { AuthServices } from "./auth.service";

const loginAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginAdmin(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Admin logged in successfully",
    data: result,
  });
});

export const AuthControllers = {
  loginAdmin,
};
