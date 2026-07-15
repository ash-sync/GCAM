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
exports.globalErrorHandler = void 0;
const env_1 = require("../config/env");
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const handleCastError_1 = require("../helpers/handleCastError");
const handleDuplicateError_1 = require("../helpers/handleDuplicateError");
const globalErrorHandler = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 500;
    let message = `Something Went wrong!! ${err.message}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let errorSources = [];
    //cloudinary file
    //   if (req.file) {
    //     await deleteImageFromCloudinary(req.file.path);
    //   }
    //   // cloudinary files
    //   if (req.files && Array.isArray(req.files) && req.files.length) {
    //     const imageUrls = (req.files as Express.Multer.File[]).map(
    //       (file) => file.path,
    //     );
    //     await Promise.all(imageUrls.map((url) => deleteImageFromCloudinary(url)));
    //   }
    // mongoose duplicate error handling
    if (err.code === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.handleDuplicateError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    //   // mongoose cast error handling
    else if (err.name === "CastError") {
        const simplifiedError = (0, handleCastError_1.handleCastError)(err);
        message = simplifiedError.message;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    //   // ZOD ERROR
    //   else if (err.name === "ZodError") {
    //     const simplifiedError = handleZodError(err);
    //     statusCode = simplifiedError.statusCode;
    //     message = simplifiedError.message;
    //     errorSources = simplifiedError.errorSources;
    //   }
    //   // mongoose validation error handling
    //   else if (err.name === "ValidationError") {
    //     const simplifiedError = handleValidationError(err);
    //     statusCode = simplifiedError.statusCode;
    //     errorSources = simplifiedError.errorSources;
    //     message = simplifiedError.message;
    //   } else if (err instanceof Error) {
    //     statusCode = 500;
    //     message = err.message;
    //   }
    res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        // not for frontend only for development phase
        err: env_1.envVars.NODE_ENV === "development" ? err : null,
        // this defines where does this error come from and which file
        // and here we have set a statement if it's in development we can see the error stack or null
        stack: env_1.envVars.NODE_ENV === "development" ? err.stack : null,
    });
});
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map