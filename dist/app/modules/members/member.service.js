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
exports.MemberService = void 0;
const member_model_1 = require("./member.model");
const createMember = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.Member.create(payload);
});
const getAllMembers = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (query.role && query.role !== "All") {
        filter.role = query.role;
    }
    if (query.search) {
        const searchRegex = new RegExp(query.search, "i");
        filter.$or = [
            { name: searchRegex },
            { phone: searchRegex },
            { role: searchRegex },
            { email: searchRegex },
        ];
    }
    return yield member_model_1.Member.find(filter);
});
const getMemberById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.Member.findById(id);
});
const updateMember = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.Member.findByIdAndUpdate(id, payload, { new: true });
});
const deleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.Member.findByIdAndDelete(id);
});
exports.MemberService = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember,
};
//# sourceMappingURL=member.service.js.map