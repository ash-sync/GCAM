import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { verfiyToken } from "../utils/jwt";
import { envVars } from "../config/env";
import { Admin } from "../modules/admin/admin.model";

export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rawToken = req.headers.authorization || req.cookies.accessToken;
      const accessToken = typeof rawToken === "string" && rawToken.startsWith("Bearer ")
        ? rawToken.slice(7)
        : rawToken;

      if (!accessToken) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "No Token Received");
      }

      const verifiedToken: JwtPayload = verfiyToken(
        accessToken,
        envVars.JWT_SECRET,
      ) as JwtPayload;

      const isUserExist = await Admin.findOne({
        email: verifiedToken.email,
      });

      if (!isUserExist) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User Does not exist");
      }

      if (!verifiedToken) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Your are not Authorized");
      }

      if (!authRoles.includes(verifiedToken.role)) {
        throw new AppError(
          StatusCodes.FORBIDDEN,
          "You are not permitted to view this route",
        );
      }

      req.user = verifiedToken;

      next();
    } catch (error) {
      next(error);
    }
  };
