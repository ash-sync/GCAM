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
exports.ContactController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const env_1 = require("../../config/env");
const nodemailer_1 = __importDefault(require("nodemailer"));
const http_status_codes_1 = require("http-status-codes");
const sendContactEmail = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
        return (0, sendResponse_1.sendResponse)(res, {
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            success: false,
            message: "Name, email and message are required",
            data: null,
        });
    }
    // Create transporter
    const transporter = nodemailer_1.default.createTransport({
        host: env_1.envVars.SMTP_HOST,
        port: Number(env_1.envVars.SMTP_PORT),
        secure: Number(env_1.envVars.SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: env_1.envVars.SMTP_USER,
            pass: env_1.envVars.SMTP_PASS,
        },
    });
    // Mail options
    const mailOptions = {
        from: `"${name}" <${env_1.envVars.SMTP_FROM}>`,
        to: env_1.envVars.ADMIN_EMAIL, // Send to the admin email
        replyTo: email,
        subject: `GCAM Portal Contact: ${subject || "General Inquiry"}`,
        text: `You have received a new message from the GCAM Contact Form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
      <h3>New Contact Message from GCAM Portal</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line; background: #f4f4f5; padding: 15px; border-radius: 8px;">${message}</p>
    `,
    };
    yield transporter.sendMail(mailOptions);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Email sent successfully",
        data: null,
    });
}));
exports.ContactController = {
    sendContactEmail,
};
//# sourceMappingURL=contact.controller.js.map