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
const mongoose = require("mongoose");
const app_1 = __importDefault(require("./app"));
const env_1 = require("./app/config/env");
const seedAdmin_1 = require("./app/utils/seedAdmin");
const seedData_1 = require("./app/utils/seedData");
let server;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(env_1.envVars.DB_URL);
        console.log("Connected to DB");
        const port = Number(env_1.envVars.PORT) || 5001;
        server = app_1.default.listen(port, "0.0.0.0", () => {
            console.log(`Server is listening on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield startServer();
    yield (0, seedAdmin_1.seedAdmin)();
    yield (0, seedData_1.seedData)();
}))();
//unhandled rejection error
process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection detected...Server shutting down... ", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// uncaught exception
process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception detected... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// Signal termination
process.on("SIGTERM", () => {
    console.log("SIGTERM signal recieved... Server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// sigint for manually check for that so this is why we use it here and sigterm for cloud managers
process.on("SIGINT", () => {
    console.log("SIGINT signal recieved... Server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
//# sourceMappingURL=server.js.map