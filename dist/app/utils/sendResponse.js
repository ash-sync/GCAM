"use strict";
// this four data is must be included here
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
// what are we doing in this function
const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        meta: data.meta,
        data: data.data,
    });
};
exports.sendResponse = sendResponse;
//# sourceMappingURL=sendResponse.js.map