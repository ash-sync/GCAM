import { Admin } from "./admin.model";
import { IAdmin } from "./admin.interface";
import AppError from "../../errorHelpers/AppError";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";

const createInvite = async (email: string, createdBy?: string) => {
  return { email, inviteToken: "simulated-token", createdBy };
};

const acceptInvite = async (payload: any) => {
  return { message: "Invite accepted successfully", payload };
};

const getAllAdmins = async (query: Record<string, string>) => {
  return await Admin.find();
};

const getMe = async (adminId: string) => {
  const admin = await Admin.findById(adminId);
  if (!admin) {
    throw new AppError(StatusCodes.NOT_FOUND, "Admin not found");
  }
  return admin;
};

const updateAdmin = async (
  adminId: string,
  payload: Partial<IAdmin>,
  verifiedToken: JwtPayload
) => {
  const admin = await Admin.findByIdAndUpdate(adminId, payload, { new: true });
  if (!admin) {
    throw new AppError(StatusCodes.NOT_FOUND, "Admin not found");
  }
  return admin;
};

export const AdminService = {
  createInvite,
  acceptInvite,
  getAllAdmins,
  getMe,
  updateAdmin,
};
