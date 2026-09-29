import rateLimit from "express-rate-limit";

export const apiRateLimit = rateLimit({
    windowMs: 60 * 1000,
    limit: 100,

    standardHeaders: "draft-8",
    legacyHeaders: false,

    message: {
        success: false,
        statusCode: 429,
        message: "Too many requests. Please try again later.",
    },
});



export const contactRateLimit = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 5,

    standardHeaders: "draft-8",
    legacyHeaders: false,

    message: {
        success: false,
        statusCode: 429,
        message: "Too many contact requests. Please try again later.",
    },
});