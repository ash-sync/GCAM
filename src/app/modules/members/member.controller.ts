import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { MemberService } from "./member.service";
import { StatusCodes } from "http-status-codes";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMember(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembers(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMemberById = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getMemberById(req.params.id as string);
  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: "Member not found",
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member profile retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.updateMember(req.params.id as string, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.deleteMember(req.params.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
