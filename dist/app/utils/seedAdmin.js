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
exports.seedAdmin = void 0;
const env_1 = require("../config/env");
const admin_interface_1 = require("../modules/admin/admin.interface");
const admin_model_1 = require("../modules/admin/admin.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isAdminExist = yield admin_model_1.Admin.findOne({
            email: env_1.envVars.ADMIN_EMAIL,
        });
        if (isAdminExist) {
            console.log("Super Admin Already Exists. Skipping seeding");
            return;
        }
        console.log("Trying to create Admin");
        const hashedPassword = yield bcryptjs_1.default.hash(env_1.envVars.ADMIN_PASSWORD, Number(env_1.envVars.BCRYPT_SALT_ROUND));
        const payload = {
            name: "Admin",
            role: admin_interface_1.Role.ADMIN,
            email: env_1.envVars.ADMIN_EMAIL,
            password: hashedPassword,
        };
        yield admin_model_1.Admin.create(payload);
        console.log("Admin user created Successfully");
    }
    catch (error) {
        console.log(error);
    }
});
exports.seedAdmin = seedAdmin;
//# sourceMappingURL=seedAdmin.js.map