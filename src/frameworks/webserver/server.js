import articleService from "../../application/services/article";
import articleServiceImpl from "../../frameworks/services/article";

export default function serverConfig(app, config) {
  // Starting the web server
  function startServer({ articleRepository, categoryRepository }) {
    // Fetching the news articles and populating them in the repository
    articleService(
      articleRepository,
      categoryRepository,
      articleServiceImpl()
    ).start();

    // Starting the express server
    return app.listen(
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
