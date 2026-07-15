"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const mongoose_1 = require("mongoose");
const memberSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: {
        type: String,
        enum: ["Executive", "Advisory", "General", "Volunteer"],
        required: true,
    },
    image: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    bio: { type: String, required: true },
    chapter: { type: String, required: true, default: "Michigan Chapter" },
    tag: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Member = (0, mongoose_1.model)("Member", memberSchema);
//# sourceMappingURL=member.model.js.map