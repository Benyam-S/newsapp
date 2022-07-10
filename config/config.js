import dotenv from "dotenv";

// Loading the environment variables from .env file
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  ip: process.env.HOST || "127.0.0.1",
  allowedOrigins: [process.env.ALLOWED_ORIGINS.split(", ")],
  newsAPIBaseURL: "https://newsapi.org/v2/top-headlines",
  newsAPIKey: process.env.NEWS_API_KEY,
};
