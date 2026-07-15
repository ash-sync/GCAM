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
exports.AuthServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const admin_model_1 = require("../admin/admin.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const env_1 = require("../../config/env");
const jwt_1 = require("../../utils/jwt");
const loginAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isAdminExist = yield admin_model_1.Admin.findOne({ email }).select("+password");
    if (!isAdminExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Admin does not exist");
    }
    const isPasswordMatched = yield bcryptjs_1.default.compare(password, isAdminExist.password);
    if (!isPasswordMatched) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Incorrect Password");
    }
    const JwtPayload = {
        adminId: isAdminExist._id,
        email: isAdminExist.email,
        role: isAdminExist.role,
    };
    const accessToken = (0, jwt_1.generateToken)(JwtPayload, env_1.envVars.JWT_SECRET, "3d");
    return {
        accessToken,
    };
});
exports.AuthServices = {
    loginAdmin,
};
//# sourceMappingURL=auth.service.js.map