import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { IAdmin } from "../admin/admin.interface";
import { Admin } from "../admin/admin.model";
import bcryptjs from "bcryptjs";

const loginAdmin = async (payload: Partial<IAdmin>) => {
  const { email, password } = payload;

  const isAdminExist = await Admin.findOne({ email });

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

  return {
    email: isAdminExist.email,
  };
};

export const AuthServices = {
  loginAdmin,
};
