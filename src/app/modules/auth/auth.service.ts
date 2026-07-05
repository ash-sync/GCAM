import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { IAdmin } from "../admin/admin.interface";
import { Admin } from "../admin/admin.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const loginAdmin = async (payload: Partial<IAdmin>) => {
  const { email, password } = payload;

  const isAdminExist = await Admin.findOne({ email }).select("+password");

  if (!isAdminExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Admin does not exist");
  }

  const isPasswordMatched = await bcryptjs.compare(
    password as string,
    isAdminExist.password as string,
  );

  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Incorrect Password");
  }

  const JwtPayload = {
    adminId: isAdminExist._id,
    email: isAdminExist.email,
    role: isAdminExist.role,
  };

  const accessToken = jwt.sign(JwtPayload, "secret", {
    expiresIn: "3d",
  });

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginAdmin,
};
