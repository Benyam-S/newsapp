import articleRouter from "./article";

export default function routes(app, express) {
  app.use("/articles", articleRouter(express));
}
