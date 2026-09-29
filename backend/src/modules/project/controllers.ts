import type { Request, Response } from "express";

import Projects from "./service.js";

import { ApiResponse } from "../../utils/response.js";
import { ApiError } from "../../utils/errer.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const project = asyncHandler(async (req: Request, res: Response) => {
  const data = await Projects.getProject();

  if (!data) {
    throw new ApiError(404, "Projects information not found");
  }

  res.status(200).json(
    new ApiResponse(
      200,
      "Project delivered successfully",
      data,
    ),
  );
});

export default project;