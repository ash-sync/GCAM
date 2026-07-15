"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
}, { timestamps: true });
exports.Category = (0, mongoose_1.model)("Category", categorySchema);
const GallerySchema = new mongoose_1.Schema({
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    imageUrls: [{ type: String, required: true }],
}, { timestamps: true });
exports.Gallery = (0, mongoose_1.model)("Gallery", GallerySchema);
//# sourceMappingURL=gallery.model.js.map