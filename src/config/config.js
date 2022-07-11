import dotenv from "dotenv";

// Loading the environment variables from .env file
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  ip: process.env.NUXT_ENV_HOST || "127.0.0.1",
  allowedOrigins: [process.env.NUXT_ENV_ALLOWED_ORIGINS.split(", ")],
  newsAPIBaseURL: "https://newsapi.org/v2/top-headlines",
  newsAPIKey: process.env.NUXT_ENV_NEWS_API_KEY,
  emailAddress: process.env.NUXT_ENV_EMAIL_ADDRESS,
  emailPassword: process.env.NUXT_ENV_EMAIL_PASSWORD,
  emailHost: process.env.NUXT_ENV_EMAIL_HOST,
  emailPort: process.env.NUXT_ENV_EMAIL_PORT ?? 465,
};
