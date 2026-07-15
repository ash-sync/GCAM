"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const handleCastError = (error) => {
    const statusCode = 400;
    const message = "Invalid MongoDB ObjectID. Please provide valid ID";
    return {
        statusCode,
        message,
    };
};
exports.handleCastError = handleCastError;
//# sourceMappingURL=handleCastError.js.map