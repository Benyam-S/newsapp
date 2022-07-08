import express from "express";
import config from "./config/config";
import expressConfig from "./frameworks/webserver/express";
import serverConfig from "./frameworks/webserver/server";
import routes from "./frameworks/webserver/routes";

const app = express();

// express.js configuration (middleware etc.)
expressConfig(app);

// server configuration and start
serverConfig(app, config).startServer();

// routes for each endpoint
routes(app, express);
