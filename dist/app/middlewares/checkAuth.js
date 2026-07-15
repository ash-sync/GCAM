"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const http_status_codes_1 = require("http-status-codes");
const jwt_1 = require("../utils/jwt");
const env_1 = require("../config/env");
const admin_model_1 = require("../modules/admin/admin.model");
const checkAuth = (...authRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rawToken = req.headers.authorization || req.cookies.accessToken;
        const accessToken = typeof rawToken === "string" && rawToken.startsWith("Bearer ")
            ? rawToken.slice(7)
            : rawToken;
        if (!accessToken) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "No Token Received");
        }
        const verifiedToken = (0, jwt_1.verfiyToken)(accessToken, env_1.envVars.JWT_SECRET);
        const isUserExist = yield admin_model_1.Admin.findOne({
            email: verifiedToken.email,
        });
        if (!isUserExist) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "User Does not exist");
        }
        if (!verifiedToken) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Your are not Authorized");
        }
        if (!authRoles.includes(verifiedToken.role)) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, "You are not permitted to view this route");
        }
        req.user = verifiedToken;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map