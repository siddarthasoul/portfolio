import type { Request, Response } from "express";

import Skills from "./service.js";

import { ApiResponse } from "../../utils/response.js";
import { ApiError } from "../../utils/errer.js";
import { asyncHandler } from "../../utils/asyncHandler.js";


const skills = asyncHandler(async (req: Request, res: Response) => {

    const data = await Skills.getSkills();

    if (!data) throw new ApiError(404, "Skills information not found");


    res.status(200).json(
        new ApiResponse(200, "Skills delivered successfully", data)
    )

})

export default skills;