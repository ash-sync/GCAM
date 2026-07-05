import express, { Request, Response } from "express";
import cors from "cors";

import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to GCAM System",
  });
});

//Global Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
