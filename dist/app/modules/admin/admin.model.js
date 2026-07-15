"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const mongoose_1 = require("mongoose");
const admin_interface_1 = require("./admin.interface");
const adminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        enum: Object.values(admin_interface_1.Role),
        default: admin_interface_1.Role.USER,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
    versionKey: false, // auto creates createdAt + updatedAt
});
exports.Admin = (0, mongoose_1.model)("Admin", adminSchema);
//# sourceMappingURL=admin.model.js.map