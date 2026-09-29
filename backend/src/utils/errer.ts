export class ApiError extends Error {
  constructor(
    statusCode: number,
    message: string,
    error: unknown = null,
  ) {
    super(message);
    this.name = "ApiError";
  }
}