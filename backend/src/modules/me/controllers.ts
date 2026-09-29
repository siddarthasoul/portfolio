import type { Request, Response } from "express";

import Me from "./service.js";

import { ApiResponse } from "../../utils/response.js";
import { ApiError } from "../../utils/errer.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const me = asyncHandler(async (req: Request, res: Response) => {
  const data = await Me.getInfo();

  if (!data) {
    throw new ApiError(404, "Portfolio information not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Information delivered successfully",
        data,
      ),
    );
});

export default me;

// Your flow is now:

// ```text
// GET /api/user/me
//         ↓
//       route
//         ↓
//    me.controller
//         ↓
//       Me.info()
//         ↓
//   portfolioData
//         ↓
//    ApiResponse
//         ↓
//       JSON
// ````

// And the response will look like:

// ```json
// {
//   "statusCode": 200,
//   "message": "Information delivered successfully",
//   "data": {
//     "name": "Siddartha Mishra",
//     "role": "AI + Full-Stack Developer",
//     "summary": "...",
//     "links": {
//       "github": "https://github.com/siddarthasoul/"
//     }
//   }
// }


// One small thing: if your project is using **ESM with NodeNext**, keeping `.ts` in imports may be correct depending on your `tsconfig`. If you're already using `.ts` imports throughout the backend, keep it consistent.
