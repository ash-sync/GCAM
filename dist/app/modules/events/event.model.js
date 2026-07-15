"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "General" },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Event = (0, mongoose_1.model)("Event", eventSchema);
//# sourceMappingURL=event.model.js.map