import { JwtPayload } from "jsonwebtoken";
import { Admin } from "./admin.model";
import { IAdmin } from "./admin.interface";
import AppError from "../../errorHelpers/AppError";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import { envVars } from "../../config/env";

const loginAdmin = async (payload: Partial<IAdmin>) => {
  const { email, password, ...rest } = payload;

  const isAdminExist = await Admin.findOne({ email });

  if (isAdminExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Admin Already Exists");
  }

  const hashedPassword = await bcrypt.hash(
    password as string,
    Number(envVars.BCRYPT_SALT_ROUND),
  );
};
