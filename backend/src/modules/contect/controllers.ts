import type { Request, Response } from "express";

import Contact from "./service.js";

import { ApiResponse } from "../../utils/response.js";
import { ApiError } from "../../utils/errer.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import type { CreateMessageInput } from "./type.js";

const contact = asyncHandler(async (req: Request, res: Response) => {
  const data = await Contact.getContact();

  if (!data) {
    throw new ApiError(404, "Contact information not found");
  }

  res.status(200).json(
    new ApiResponse(
      200,
      "Contact delivered successfully",
      data,
    ),
  );
});

const sendMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body as CreateMessageInput;

    const message = await Contact.sendMessage(data);

    res.status(201).json(
      new ApiResponse(
        201,
        "Message sent successfully",
        message,
      ),
    );
  },
);


const updateMessageStatus = asyncHandler(
  async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      throw new ApiError(400, "Status is required");
    }

    const message = await Contact.updateMessageStatus(
      id,
      status,
    );

    res.status(200).json(
      new ApiResponse(
        200,
        "Message status updated successfully",
        message,
      ),
    );
  },
);

export {
  contact,
  sendMessage,
  updateMessageStatus,
};