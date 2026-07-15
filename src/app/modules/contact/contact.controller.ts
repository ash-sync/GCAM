import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { envVars } from "../../config/env";
import nodemailer from "nodemailer";
import { StatusCodes } from "http-status-codes";

const sendContactEmail = catchAsync(async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Name, email and message are required",
      data: null,
    });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: envVars.SMTP_HOST,
    port: Number(envVars.SMTP_PORT),
    secure: Number(envVars.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: envVars.SMTP_USER,
      pass: envVars.SMTP_PASS,
    },
  });

  // Mail options
  const mailOptions = {
    from: `"${name}" <${envVars.SMTP_FROM}>`,
    to: envVars.ADMIN_EMAIL, // Send to the admin email
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

  await transporter.sendMail(mailOptions);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Email sent successfully",
    data: null,
  });
});

export const ContactController = {
  sendContactEmail,
};
