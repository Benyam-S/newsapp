import dotenv from "dotenv";

// Loading the environment variables from .env file
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  ip: process.env.HOST || "127.0.0.1",
  allowedOrigins: [process.env.ALLOWED_ORIGINS.split(", ")],
  newsAPIBaseURL: "https://newsapi.org/v2/top-headlines",
  newsAPIKey: process.env.NEWS_API_KEY,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASSWORD,
  emailHost: process.env.EMAIL_HOST,
  emailPort: process.env.EMAIL_PORT ?? 465,
};
