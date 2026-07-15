import mongoose from "mongoose";
import { TErrorSources } from "../interfaces/error.type";
export declare const handleValidationError: (error: mongoose.Error.ValidationError) => {
    statusCode: number;
    message: string;
    errorSources: TErrorSources[];
};
//# sourceMappingURL=handleValidationError.d.ts.map