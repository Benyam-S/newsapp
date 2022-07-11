import initArticleService from "../../application/services/article";
import articleRepository from "../../frameworks/repositories/article";
import categoryRepository from "../../frameworks/repositories/category";
import articleService from "../../frameworks/services/article";

export default function serverConfig(app, config) {
  // Starting the web server
  function startServer() {
    // Fetching the news articles and populating them in the repository
    initArticleService(articleRepository, categoryRepository, articleService());

    // Starting the express server
    app.listen(
      config.port,
      console.log(
        "Express server listening on %d, in %s mode",
        config.port,
        app.get("env")
      )
    );
  }

  return { startServer };
}
