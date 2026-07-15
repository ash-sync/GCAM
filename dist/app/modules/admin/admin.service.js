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
exports.AdminService = void 0;
const admin_model_1 = require("./admin.model");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const http_status_codes_1 = require("http-status-codes");
const createInvite = (email, createdBy) => __awaiter(void 0, void 0, void 0, function* () {
    return { email, inviteToken: "simulated-token", createdBy };
});
const acceptInvite = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return { message: "Invite accepted successfully", payload };
});
const getAllAdmins = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield admin_model_1.Admin.find();
});
const getMe = (adminId) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield admin_model_1.Admin.findById(adminId);
    if (!admin) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Admin not found");
    }
    return admin;
});
const updateAdmin = (adminId, payload, verifiedToken) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield admin_model_1.Admin.findByIdAndUpdate(adminId, payload, { new: true });
    if (!admin) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Admin not found");
    }
    return admin;
});
exports.AdminService = {
    createInvite,
    acceptInvite,
    getAllAdmins,
    getMe,
    updateAdmin,
};
//# sourceMappingURL=admin.service.js.map