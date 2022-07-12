import express from "express";
import config from "./config/config";
import expressConfig from "./frameworks/webserver/express";
import serverConfig from "./frameworks/webserver/server";
import routes from "./frameworks/webserver/routes";
import initControllers from "./adapter/controller";

// Importing dependency implementations
import articleRepository from "./frameworks/repositories/article";
import categoryRepository from "./frameworks/repositories/category";
import emailService from "./frameworks/services/email";

const app = express();

// express.js configuration (middleware etc.)
expressConfig(app);

// Initializing the repositories implementation
let articleRepo = articleRepository();
let categoryRepo = categoryRepository();

// initiating the controllers and routes for each endpoint
routes(
  app,
  initControllers({
    articleRepository: articleRepo,
    categoryRepository: categoryRepo,
    emailService: emailService(),
  })
);

// server configuration and start
serverConfig(app, config).startServer({
  articleRepository: articleRepo,
  categoryRepository: categoryRepo,
});
