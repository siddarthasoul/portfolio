import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT);

if (!PORT) {
  throw new Error("PORT is not defined");
}

const FRONTEND_URL = process.env.FRONTEND_URL;

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL is not defined");
}

export const env = {
  PORT,
  FRONTEND_URL,
};