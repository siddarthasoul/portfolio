import path from "path";
import express, { Router } from "express";

const router = Router();

const uploadsPath = path.join(
  process.cwd(),
  "uploads",
);

const resumePath = path.join(
  uploadsPath,
  "resume",
  "use.PDF",
);

// Download resume
router.get("/resume/download", (req, res) => {
  res.download(
    resumePath,
    "Siddartha-Mishra-Resume.pdf",
    (error) => {
      if (error) {
        console.error(
          "Resume download failed:",
          error,
        );

        if (!res.headersSent) {
          res.status(500).json({
            statusCode: 500,
            message: "Unable to download resume",
          });
        }
      }
    },
  );
});

// Serve uploaded files
router.use(
  "/",
  express.static(uploadsPath),
);

export default router;