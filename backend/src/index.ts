import express, { type Request, type Response } from "express";
import { env } from "./core/env.js";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js"
import router from "./modules/server.js";
import { apiRateLimit } from "./middleware/rateLimit.js"
import {
  connectDB,
  checkDBHealth,
  disconnectDB,
} from "./core/db.js";

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/v1", apiRateLimit, router);

app.use(errorHandler);

app.get("/health", async (req: Request, res: Response) => {
  const database = await checkDBHealth();

  res.status(database ? 200 : 503).json({
    status: database ? "healthy" : "unhealthy",
    database: database ? "connected" : "disconnected",
  });
});

const server = await (async () => {
  try {

    await connectDB();

    return app.listen(env.PORT, () => {
      console.log(
        `Server running on http://localhost:${env.PORT}`,
      );
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
})();

const shutdown = async () => {
  console.log("\n Shutting down server...");

  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);