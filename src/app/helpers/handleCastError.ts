import { CastError } from "mongoose";

export const handleCastError = (error: CastError) => {
  const statusCode = 400;
  const message = "Invalid MongoDB ObjectID. Please provide valid ID";
  return {
    statusCode,
    message,
  };
};
