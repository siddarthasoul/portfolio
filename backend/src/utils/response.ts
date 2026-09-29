export class ApiResponse<T = unknown> {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly data: T | null = null,
  ) {}
}