import bodyParser from "body-parser";
import cors from "cors";
import config from "../../config/config";

export default function expressConfig(app) {
  app.use(
    cors({
      origin: config.allowedOrigins,
      optionsSuccessStatus: 200,
    })
  );

  // Setting parser
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    })
  );

  app.use((req, res, next) => {
    // Allowed request methods
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Allowed request headers
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-type, Authorization, Cache-control, Pragma"
    );

    // Pass to next layer of middleware
    next();
  });
}
