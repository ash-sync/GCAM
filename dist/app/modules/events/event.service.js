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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const event_model_1 = require("./event.model");
const createEvent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_model_1.Event.create(payload);
});
const getAllEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_model_1.Event.find().sort({ date: 1 });
});
const getEventById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_model_1.Event.findById(id);
});
const updateEvent = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_model_1.Event.findByIdAndUpdate(id, payload, { new: true });
});
const deleteEvent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_model_1.Event.findByIdAndDelete(id);
});
exports.EventService = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};
//# sourceMappingURL=event.service.js.map