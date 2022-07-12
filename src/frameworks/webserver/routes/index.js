import articleRouter from "./article";
import categoryRouter from "./category";
import serviceRouter from "./service";

// routes is a function that defines all the routes allowed by the server
export default function routes(app, controllers) {
  app.use("/articles", articleRouter(controllers.articleController));
  app.use("/categories", categoryRouter(controllers.categoryController));
  app.use("/service", serviceRouter(controllers.serviceController));
}
