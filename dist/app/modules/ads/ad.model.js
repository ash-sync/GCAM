"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ad = void 0;
const mongoose_1 = require("mongoose");
const adSchema = new mongoose_1.Schema({
    sponsorName: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true, trim: true },
    type: { type: String, enum: ["banner", "card"], required: true },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Ad = (0, mongoose_1.model)("Ad", adSchema);
//# sourceMappingURL=ad.model.js.map