import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { IAdmin } from "./admin.interface";
import { JwtPayload } from "jsonwebtoken";



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

const acceptInvite = catchAsync(async(req: Request, res: Response) => {
  const result = await AdminService.acceptInvite(req.body);
  
  sendResponse(res{
    success: true,
    statusCode: StatusCodes.OK,
    message: "Invite Accepted",
    data: result
  })
})

const getAllAdmins = catchAsync(async(req: Request, res: Response) => {
  const query = req.query;
  const result = await AdminService.getAllAdmins(query as Record<string,string>)
  sendResponse(res{
    success: true,
    statusCode: StatusCodes.OK,
    message: "Invite Accepted",
    data: result
  })
})

const getMe = catchAsync(async (req: Request, res: Response) => {
  const decodedToken = req.user as JwtPayload

  const result = await AdminService.getMe(decodedToken.adminId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Your profile Retrieved Successfully",
    data: result.data,
  });

})


const updateAdmin = catchAsync(async(req: Request, res: Response) => {
  const adminId =req.params.id;
  const verifiedToken = req.user;
  const payload: IAdmin = {
    ...req.body,
  }
  const admin = await AdminService.updateAdmin(adminId,payload, verifiedToken as JwtPayload)
    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "User updated Successfully",
      data: admin,
    });
})


export const AdminControllers = {
  loginAdmin,
  createInvite,
  acceptInvite,
  getMe,
  getAllAdmins,
  updateAdmin,
}