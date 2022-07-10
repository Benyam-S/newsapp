import articleRouter from "./article";
import categoryRouter from "./category";

// routes is a function that defines all the routes allowed by the server
export default function routes(app, express) {
  app.use("/articles", articleRouter(express));
  app.use("/categories", categoryRouter(express));
}
