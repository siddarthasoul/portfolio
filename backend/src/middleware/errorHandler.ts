import type { ErrorRequestHandler } from "express";

interface AppError extends Error {
  statusCode?: number;
}

export const errorHandler: ErrorRequestHandler = (
  error: AppError,
  req,
  res,
  _next,
) => {
  console.error("Unhandled error:", {
    method: req.method,
    url: req.originalUrl,
    error,
  });

  const statusCode = error.statusCode ?? 500;

  const message =
    statusCode >= 500
      ? "Internal server error"
      : error.message || "Request failed";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};